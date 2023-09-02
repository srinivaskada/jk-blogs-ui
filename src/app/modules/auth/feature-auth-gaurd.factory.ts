import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

export function featureAuthGuardFactory(
  feature: string,
  redirectRoute: string
): CanActivateFn {
  return async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    const isAuthenticated = authService.isFeatureAuthenticated(feature);
    console.log('Can Activate')
    console.log(route.url)
    console.log(state.url)
    console.log('isAuthenticated', isAuthenticated)
    return isAuthenticated || router.createUrlTree([redirectRoute]);
  };
}