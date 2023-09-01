export interface PaginatedEntitiesModel<T> {
  page: number
  limit: number,
  items: T[]
}