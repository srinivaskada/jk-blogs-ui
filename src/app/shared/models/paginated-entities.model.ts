export interface PaginatedEntitiesModel<T> {
  page: number
  limit: number
  total: number
  items: T[]
}