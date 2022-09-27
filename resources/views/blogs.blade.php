@extends('layouts.header')

@section('content')
    <section class="blog-header-section"  style="background: url({{asset('/images/blog_page.jpg')}});" ><h1>BLOGS</h1>  </section>
    <section class="home-blog-section">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 home-blog-section-wrapper padding-0">
                <p class="section-title"></p>
                <div class="home-blog-section-container">
                    <div class="container padding-0">
                        <div class="home-blog-section-items-container">
                            <div class="row">
                                @foreach($blogs as $blog)
                                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 blog-item blogpag2">
                                    <div class="home-blog-section-item">
                                        <div class="image-container">
                                            <a href="{{url('/blog/' . $blog->slug)}}">
                                                <img src="{{url('storage/app/blog/' .$blog->file)}}"  width="300" height="160" class="img-fluid" alt="{{$blog->name}}" title="{{$blog->name}}"></amp-img>
                                            </a>
                                        </div>
                                        <div class="text-container">
                                            <a href="{{url('/blog/' . $blog->slug)}}">
                                                <p class="blog-heading">{{$blog->name}}</p>
                                                <p class="blog-short-text">
                                                    {!! substr(strip_tags($blog->content) ,'0', '150') !!}
                                                </p>
                                                <p class="blog-short-text"><span>Read more...</span></p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                    @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

@endsection
