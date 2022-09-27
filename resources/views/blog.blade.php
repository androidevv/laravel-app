@extends('layouts.header')

@section('content')
    <style>
    
        @media only screen and (max-width: 768px) {
            h1{
                font-size: 17px !important;
                line-height: 1.5 !important;
            }
        }
    </style>
     <head>
         <link rel="shortcut icon" href="images/favicon.png" type="image/vnd.microsoft.icon" />
     </head>
    <style>@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');.archive-content{margin-top:-1rem}.archive-content *{font-family:'Merriweather',serif}.archive-content img{max-width:100%;height:auto}.archive-content ul,.archive-content ol{margin-bottom:1.5rem}.archive-content ul li,.archive-content ol li{margin-bottom:.3rem}html body h1 *,html body h2 *,html body h3 *,html body h4 *,html body h5 *,html body h6 *{font-weight:700 !important;min-height:25px}html body h1{font-size:2em;font-weight:700 !important;margin-bottom:1.5rem}html body h2{font-size:1.5em;font-weight:700 !important;margin-bottom:1.5rem}html body h3{font-size:1.17em;font-weight:700 !important;margin-bottom:1.5rem}html body h5{font-size:.83em;font-weight:700 !important;margin-bottom:1.5rem}html body h6{font-size:.75em;font-weight:700 !important;margin-bottom:1.5rem}.aligncenter{display:inherit;margin:0 auto}.footer-main{background-color:#fff}.ftr-social{margin-top:50px;margin-bottom:0;padding:0;text-align:center}.ftr-social>li{display:inline-block;margin:0 33px}.ftr-social>li>a{color:#464646;font-size:14px;font-weight:700;text-decoration:none;text-transform:uppercase;-webkit-transition:all 1s ease 0s;-moz-transition:all 1s ease 0s;-o-transition:all 1s ease 0s;transition:all 1s ease 0s}.ftr-social>li>a>i{font-size:13px;margin-right:15px}.ftr-social>li>a:hover{opacity:.5}div.type-post{text-align:center}.type-post{margin-bottom:50px}.type-post .entry-cover{position:relative}.type-post .entry-cover>a{display:inline-block;max-width:100%;position:relative}.fit{object-fit:cover}.type-post .entry-cover .post-meta~a:before{background-color:rgba(0,0,0,.35);content:"";position:absolute;left:0;right:0;top:0;bottom:0;opacity:0;-webkit-transition:all 1s ease 0s;-moz-transition:all 1s ease 0s;-o-transition:all 1s ease 0s;transition:all 1s ease 0s}.type-post:hover .entry-cover .post-meta~a:before{opacity:1}.type-post .entry-cover .post-meta{position:absolute;left:25px;right:25px;bottom:10px;z-index:1}.type-post .entry-cover .post-meta>span{color:#fff;font-size:14px;font-weight:600;opacity:0;animation-duration:.5s}.type-post:hover .entry-cover .post-meta>span{opacity:1}.type-post .entry-cover .post-meta>span>a{color:#fff;text-transform:uppercase;text-decoration:none}.type-post .entry-cover .post-meta>span.byline{float:left;text-align:left}.type-post:hover .entry-cover .post-meta>span.byline{animation-name:slideInLeft}.type-post .entry-cover .post-meta>span.post-date{float:right;text-align:right}.type-post:hover .entry-cover .post-meta>span.post-date{animation-name:slideInRight}.type-post .entry-content{display:inline-block;max-width:100%;margin-top:27px}.blog-single .type-post .entry-content{margin-top:50px}div.type-post .entry-content{padding-left:15px;padding-right:15px}.type-post .entry-header>span{color:#a1a1a1;font-size:14px;letter-spacing:.18px;line-height:2;text-transform:uppercase}.type-post .entry-header>span>a{color:#a1a1a1;text-decoration:none;-webkit-transition:all 1s ease 0s;-moz-transition:all 1s ease 0s;-o-transition:all 1s ease 0s;transition:all 1s ease 0s}.type-post .entry-header>span>a:hover{color:#151515}.type-post .entry-header .entry-title{text-align:center;color:#151515;font-size:24px;font-weight:700;letter-spacing:-.6px;line-height:1.25;margin:5px 0 16px;padding-bottom:18px;position:relative}.type-post:not(.post-position) .entry-header .entry-title:before{background-color:#e1e1e1;bottom:0;content:"";height:2px;margin:0 auto;position:absolute;left:0;right:0;width:30px}.type-post .entry-header .entry-title>a{color:#151515;text-decoration:none;-webkit-transition:all 1s ease 0s;-moz-transition:all 1s ease 0s;-o-transition:all 1s ease 0s;transition:all 1s ease 0s}.type-post .entry-header .entry-title>a:hover{color:#717171}.type-post .entry-content p{color:#000;letter-spacing:.15px;line-height:1.6;-webkit-hyphens:auto;-moz-hyphens:auto;hyphens:auto;text-align:justify;font-weight:300;margin-bottom:2rem}.type-post .entry-content p:last-of-type{margin-bottom:0}.type-post .entry-content>a,.type-post .entry-content>a:before{-webkit-transition:all .5s ease 0s;-moz-transition:all .5s ease 0s;-o-transition:all .5s ease 0s;transition:all .5s ease 0s}.type-post .entry-content>a{color:#a1a1a1;display:inline-block;font-size:14px;letter-spacing:.18px;line-height:2;margin-top:12px;position:relative;text-decoration:none;text-transform:uppercase;animation-duration:.6s}.type-post .entry-content>a:before{background-color:#151515;content:"";left:0;position:absolute;bottom:0;height:2px;width:0}.type-post .entry-content>a:hover{color:#151515}.type-post .entry-content>a:hover:before{width:100%}.type-post.post-position{position:relative;margin-bottom:60px}.type-post.post-position .entry-cover>a:before{background-color:rgba(0,0,0,.45);bottom:0;content:"";position:absolute;left:0;right:0;top:0;opacity:1}.type-post.post-position .entry-content{left:15px;position:absolute;right:15px;top:50%;transform:translate(0%,-50%);-webkit-transform:translate(0%,-50%);-moz-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);margin-top:0}.type-post.post-position .entry-content .entry-header>span{font-weight:700}.type-post.post-position .entry-content .entry-header>span>a,.type-post.post-position .entry-header .entry-title>a{color:#fff}.type-post.post-position .entry-header .entry-title{padding-bottom:0;margin-bottom:3px}.type-post.post-position .entry-content>a{color:#fff;font-weight:700}.type-post.post-position .entry-content>a:before{background-color:#fff}.blog-paralle .type-post .entry-content p,.blog-masonry-box .entry-content p:last-of-type{margin-bottom:0}.entry-content .entry-footer{border-bottom:1px solid #e1e1e1;display:inline-block;width:100%;margin-top:2rem}.related-post>h3{font-size:2rem;font-weight:600;letter-spacing:-.4px;line-height:1.875;margin-bottom:23px;position:relative;padding-bottom:10px;text-align:center;text-transform:capitalize}.related-post .owl-carousel .owl-item{position:relative;min-height:1px;display:inline-block;-webkit-backface-visibility:hidden;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-bottom:2rem}.releated-post .owl-carousel .owl-item img{display:block;width:100%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.related-post .related-post-box h3{font-size:15px;letter-spacing:-.375px;line-height:1.25;display:block;margin-top:.75rem;min-height:48px}.related-post .related-post-box h3 a{color:#151515;text-decoration:none;font-weight:700}.related-post .related-post-box img{height:160px}.related-post .related-content{color:#717171;letter-spacing:.15px;line-height:1.4;-webkit-hyphens:auto;-moz-hyphens:auto;-o-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.author-wrapper label{font-size:1rem}.author-wrapper .date{font-size:.9rem;display:inline-block;margin-right:.6rem}.author-wrapper .time{font-size:.9rem;display:inline-block;margin-left:.6rem}.author-wrapper{display:flex;align-items:center;margin-top:2rem}.author-wrapper .author-image{padding:2px;position:relative;background:linear-gradient(145deg,#27ade7 0,#314755 101%);border-radius:50%;margin-right:1.5rem}.author-wrapper .author-image .module{background:#fff;border-radius:50%;padding:1.75rem;width:6.5rem}</style>
    <section class="archive-content">
        <div class="entry-cover">
            <img src="{{url('storage/app/blog/' .$blog->file)}}" class="img-fluid fit w-100" alt="Post" style="max-height: 400px;">
        </div>
        <div class="container">
            
            <div class="row">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-12 content-area p-0">
                            <article class="type-post">
                                <div class="entry-content">
                                    <h1 class="blog_heading">{{$blog->name}}</h1>

                                    {!! $blog->content !!}

                                </div>
                            </article>

                        </div>
                    </div>

                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pp-xl-none pl-xl-none pp-lg-none pl-lg-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                        <div class="container padding-0 related-posts-wrapper">
                            <div class="row">
                                <div class="related-posts-heading">
                                    <h2>Related Posts</h2>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pp-xl-none pl-xl-none pp-lg-none pl-lg-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                                    <div class="row">
                                        @foreach($related_blogs as $r_blog)
                                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 related-post-item-wrapper">
                                                <div class="related-post-item">
                                                    <div class="image-container">
                                                        <a href="{{url('/blog/' . $r_blog->slug)}}">
                                                            <img src="{{url('storage/app/blog/' .$r_blog->file)}}" alt="Blog image" width="300" height="160" class="img-fluid" alt="{{$r_blog->name}}" title="{{$r_blog->name}}"></amp-img>
                                                        </a>
                                                    </div>
                                                    <div class="text-container">
                                                        <p class="blog-heading">{{$r_blog->name}}</p>
                                                        <div class="blog-short-text" style="font-size: 13px; font-family: sans-serif;">
                                                            {!! substr(strip_tags($blog->content) ,'0', '150') !!}
                                                        </div>
                                                        <a href="{{url('/blog/' . $r_blog->slug)}}">
                                                            <p class="blog-short-text"><span style="color: #7c7ce1;">Read more...</span></p>
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
            </div>
        </div>
    </section>

@endsection
