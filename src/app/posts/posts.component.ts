import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent {
  post: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
    // this get method is used to pull all the data which is coming from Server 
    http.get(this.url).subscribe(response => {
      this.post = response
    })
  }

  // this method is used to Push data in the Server 
  creatPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      post.id = response;
      this.post.splice(0, 0, post)
      console.log(response);
    })
  }

  // this method is used to update data in the Server "isRead" is the payload which we passed from Frontend
  updatePost(post: any) {
    //this.http.put(this.url,JSON.stringify(post))
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })).subscribe(res => {
      console.log(res);
    })
  }

  deletePost(post: any){
    this.http.delete(this.url + '/' + post.id,).subscribe(res => {
      let index = this.post.indexOf(post);
      this.post.splice(index,1)
    })}
}
