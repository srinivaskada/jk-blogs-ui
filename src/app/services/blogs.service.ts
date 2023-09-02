import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BlogModel } from '../shared/models/blog.model';

@Injectable()
export class BlogsService {
  constructor(private httpClient: HttpClient) {}

  getAllBlogs({
    limit = 10,
    page = 1
  }) {
    return this.httpClient.get<{
      limit: number,
      page: number,
      data: BlogModel[]
    }>(`${environment.apiV1BaseUrl}/blogs`, {
      params: {
        limit,
        page
      }
    })
  }

  getBlogDetails(blogId: BlogModel['id']) {
    return this.httpClient.get<{
      data: BlogModel
    }>(`${environment.apiV1BaseUrl}/blogs/${blogId}`)
  }
}