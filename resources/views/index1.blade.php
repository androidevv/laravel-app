@extends('layouts.header')

@section('content')

    <style>
        @media only screen and (min-width: 768px) {
            .search-form {
                background-image: none !important;
                background: #f6f6f600;
            }
            label{
                color: #000;
            }
            .col-xl-3{
                max-width: 100%;
            }
            #startDate,#endDate{
                padding: 9px;
                margin-left: 8px;
                font-weight: 600;
            }
            #category_list,#locations_list{
                font-weight: 600;
            }
            .submit_button_kohstan{
                text-align: center;
            }
            .search-form{
                -webkit-box-shadow: 0 5px 5px -10px #DDD;
            }
            .home-header-section{
                height: 22vw;
            }
        }
        @media only screen and (max-width: 767px){
            .home-header-section{
                height: 280px;
            }
            .search-form {
                background-image: none !important;
                background: #f6f6f600;
            }
        }
    </style>

    <section class="home-header-section d-flex" style="display: none !important; background-image: url({{asset('images/home_ban_m.jpg')}})">
        <div class="container d-flex">
            <div class="col-6 offset-6 col-md-6 offset-md-6 ban-caption align-self-center">
                Best Professional Car Rental Services in UAE
            </div>
        </div>
        <!-- Modal -->
        <div class="modal" style="background: rgba(191, 190, 190, 0.97);" id="modal-one" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-header">

                    <a href="#" class="btn-close" aria-hidden="true"></a>
                </div>
                <div class="modal-body">

                </div>
                <div class="modal-footer">
                    <a href="#" class="btn"></a>
                </div>
            </div>
        </div>
        <!-- /Modal -->
    </section>

    <!--searc area-->
    <section class="home-header-section" style="background: url({{asset('images/banner3.jpg')}});">
        <div class="container padding-0 forms-container">
            <p class="main-heading">Best rent a car deals from top brands in UAE</p>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pp-none pl-none">
                    <aside class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 pl-xl-none pp-md-none pl-md-none pp-sm-none pl-sm-none">
                        <div class="fixme" id="asidediv" data-scroll="true">
                            {{--<form class="search-form" method="POST" action="{{ route('carlist_search') }}" style="background-image: url({{asset('images/banner.jpg')}});">--}}
                            {!! Form::open(['action' => 'Home@car_list' , 'method'=>'post', 'style' => "background-image: url({{asset('images/banner.jpg')}})"]) !!}
                            <div class="row">
                                <div class="form-group col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 pl-xl-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                                    <label for="category_list">Category</label>
                                    <div class="dropdown-list-container">
                                        <select data-hj-whitelist  class="form-control" id="category_list" name="category" value="All Cars" readonly >
                                            <option class="active" value="0">All Cars</option>
                                            @foreach($categories as $category)
                                                <option value="{{$category->category_id}}">{{$category->name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 pl-xl-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                                    <label for="locations">Locations</label>
                                    <div class="dropdown-list-container">
                                        <select data-hj-whitelist type="text" class="form-control" id="locations_list" name="locations" readonly >
                                            <!-- <option class="active" value="0">All Locations</option> -->
                                            <option value="dubai" >Dubai</option>
                                            <option value="sharjah" >Sharjah</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 pl-xl-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                                    <label for="startDate">Start Date</label>
                                    <div class="input-with-icon-container">
                                        <input data-hj-whitelist type="text" class="form-control datepicker" id="startDate" value="{{date("d/m/Y")}}" min=date("d/m/Y") name="startDate" readonly />
                                        <i class="far fa-calendar-alt"></i>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 pl-xl-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                                    <label for="endDate">End Date</label>
                                    <div class="input-with-icon-container">
                                        <input data-hj-whitelist type="text" class="form-control datepicker" id="endDate" value="{{(isset($endDate) && $endDate ? $endDate : date('d/m/Y' , strtotime("+1 month")))}}" name="endDate" readonly />
                                        <i class="far fa-calendar-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <small class="form-text" style="display: none; color: red;" id="date_err"></small>
                            <button style="display:none;" type="button" id="search_submit" class="btn btn-blue">Search</button>
                            <div class="submit_button_kohstan"><button  type="submit" id="search_submit_new" name="search_submit_new" class="btn btn-blue">Search</button></div>
                            </form>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </section>
    <!--button lists-->
    <section class="home-button-lists">
        <div class="container padding-0">
            <div class="row">
                <div class="col-12">
                    <div class="btn-filter-row">
                        <ul class="btn-filter-wrapper padding-0">
                            <li class="btn-filter pp-none pl-none pp-sm-none pl-sm-none pp-md-none pl-md-none pp-lg-none pl-lg-none pp-xl-none pl-xl-none">
                                <form method="post" action="https://kohistanrentacar.com/carlist/">
                                    <input type="hidden" name="monthly_deal" value="1">
                                    <input type="hidden" name="st_date" value="16/03/2020">
                                    <input type="hidden" name="end_date" value="16/04/2020">
                                    <button class="btn btn-blue" type="submit" name="submit">
                                        Monthly Deals
                                    </button>
                                </form>
                            </li>
                            <li class="btn-filter pp-none pl-none pp-sm-none pl-sm-none pp-md-none pl-md-none pp-lg-none pl-lg-none pp-xl-none pl-xl-none">
                                <form method="post" action="https://kohistanrentacar.com/carlist/">
                                    <input type="hidden" name="cheapest_car" value="1">
                                    <input type="hidden" name="st_date" value="16/03/2020">
                                    <input type="hidden" name="end_date" value="16/04/2020">
                                    <button class="btn btn-blue" type="submit" name="submit">
                                        Cheapest Cars
                                    </button>
                                </form>
                            </li>
                            <li class="btn-filter pp-none pl-none pp-sm-none pl-sm-none pp-md-none pl-md-none pp-lg-none pl-lg-none pp-xl-none pl-xl-none">
                                <form method="post" action="https://kohistanrentacar.com/carlist/">
                                    <input type="hidden" name="car_lease" value="1">
                                    <input type="hidden" name="st_date" value="16/03/2020">
                                    <input type="hidden" name="end_date" value="16/04/2020">
                                    <button class="btn btn-blue" type="submit" name="submit">
                                        Car Lease
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--cars section-->
    <section class="home-cars-section">
        <div class="container padding-0">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 home-cars-wrapper">
                    <div class="row main-box">

                        @if(count($cars)>0)
                            @foreach($cars as $car)
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 home-cars-item-container mx-auto">
                                    <div class="home-cars-item">
                                        <div class="title-container d-block d-sm-block d-md-none d-lg-none d-xl-block">
                                            <p class="item-title"><a style="font-size: .8rem;" href="{{url('/cardetail/' . $car->car_id)}}">{{$car->brand_name. ' ' .$car->name}}</a></p>
                                            <div class="item-category">{{$car->category_name}}</div>
                                        </div>
                                        <div class="image-container">
                                            <a href="{{url('/cardetail/' . $car->car_id)}}" class="hv-center">
                                                <amp-img src="{{url('storage/app/car/' .$car->file)}}" width="300" height="189" layout="responsive" alt="{{$car->name}}" title="{{$car->name}}" class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout" i-amphtml-layout="responsive" style="--loader-delay-offset:600ms !important;"><i-amphtml-sizer style="padding-top: 63%;"></i-amphtml-sizer><img decoding="async" alt="{{$car->name}}" src="{{url('storage/app/car/' .$car->file)}}" title="{{$car->name}}" class="i-amphtml-fill-content i-amphtml-replaced-content"></amp-img>
                                            </a>
                                        </div>
                                        <div class="text-container">
                                            <div class="row">
                                                <ul class="item-options col-6 col-sm-6 col-md-7 col-lg-7 col-xl-6">
                                                    <div class="title-container d-none d-sm-none d-md-block d-lg-block d-xl-none">
                                                        <p class="item-title"><a href="https://rentalcarsuae.com/car/kia-picanto/">Kia Picanto</a></p>
                                                        <div class="item-category">Hatchback														<ul>
                                                                <li><i class="fas fa-star"></i></li><li><i class="fas fa-star"></i></li><li><i class="fas fa-star"></i></li><li><i class="fas fa-star"></i></li><li><i class="fas fa-star-half"></i></li>														</ul>
                                                            <span class="rating">4.6</span>
                                                        </div>
                                                    </div>
                                                    <li><i class="fas fa-check"></i> 5000 Km</li><li><i class="fas fa-check"></i> Deposit: 900</li><li><i class="fas fa-check"></i> Excess Claim: 700</li><li><i class="fas fa-check"></i> Free Delivery</li><li style="color: #17A8E3;font-size: 97%;"><i class="fas fa-check"></i> <b>100% Sanitized</b></li>											</ul>
                                                <div class="item-price-list col-6 col-sm-6 col-md-5 col-lg-5 col-xl-6">
                                                    <ul class="price-list">
                                                        <li><a href="https://rentalcarsuae.com/car-checkout/?id=179&amp;category=&amp;locations=&amp;startDate=15/04/2020&amp;endDate=15/05/2020&amp;booking-rent=995&amp;days=30">995 AED <small>/ Month</small></a></li>
                                                        <li><a href="https://rentalcarsuae.com/car-checkout/?id=179&amp;category=&amp;locations=&amp;startDate=15/04/2020&amp;endDate=22/04/2020&amp;booking-rent=300&amp;days=7">300 AED <small>/ Week</small></a></li>
                                                        <li><a href="https://rentalcarsuae.com/car-checkout/?id=179&amp;category=&amp;locations=&amp;startDate=15/04/2020&amp;endDate=18/04/2020&amp;booking-rent=180&amp;days=3">60 AED <small>/ Day</small></a></li>												</ul>
                                                    <ul class="item-button-list">
                                                        <li >
                                                            {!! Form::open(['action' => 'Home@checkout' , 'method'=>'post' ]) !!}
                                                            <input type="hidden" name="car_id" value="{{$car->car_id}}">
                                                            <input type="hidden" name="rent" value="{{$car->monthly_rent}}">
                                                            <input type="hidden" name="days" value="30">
                                                            <input type="hidden" name="startDate" value="{{(isset($startDate) && $startDate ? $startDate : date("d/m/Y"))}}">
                                                            <input type="hidden" name="endDate" value="{{(isset($endDate) && $endDate ? $endDate : date('d/m/Y' , strtotime("+1 month")))}}">
                                                            <button style="width: initial; min-height: inherit; line-height: initial;" class="btn btn-blue " type="submit">Book Now</button>
                                                            </form>
                                                        </li><br />
                                                        <li>
                                                            <a style="width: initial; min-height: inherit; line-height: initial;" href="{{url('/cardetail/' . $car->car_id)}}" class="btn btn-blue btn-carlist-lh">View Details</a>
                                                        </li><br />
                                                        <!--												<li><a target="_blank" onclick="return gtag_report_conversion_wp('https://wa.me/+971557865406');" href="https://wa.me/+971557865406" class="btn btn-white inquiry"><i class="fa fa-whatsapp fa-1x"></i> Whatsapp</a></li>-->
                                                        <li><a style="width: initial; min-height: inherit; line-height: initial;" href="javascript:void(0)" data-toggle="modal" data-target="#inquiry"  data-monthly="{{$car->monthly_rent}}" data-weekly="{{$car->weekly_rent}}" data-daily="{{$car->daily_rent}}" data-car_id="{{$car->car_id}}"  data-car="{{$car->name}}" data-type="{{$car->category_name}}" data-company="{{$car->brand_name}}" data-date1="{{date("d/m/Y")}}" data-date2="{{(isset($endDate) && $endDate ? $endDate : date('d/m/Y' , strtotime("+1 month")))}}" data-duration="30" data-amount="{{$car->monthly_rent}}" class="btn btn btn-blue btn-carlist-lh inquiry">Send Inquiry</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        @endif


                    </div>

                    <a class="btn-all-cars btn btn-blue" style="padding: 0.75rem 2rem;display: block;clear: both;width: max-content;margin: 1rem auto;" href="https://rentalcarsuae.com/cars-list/">Browse All Cars</a>

                    <section class="home-blog-section">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 home-blog-section-wrapper padding-0">
                                <p style="text-align: center;" class="section-title">Latest Blogs</p><br>
                                <div class="home-blog-section-container">
                                    <div class="container padding-0">
                                        <div class="home-blog-section-items-container">
                                            <div class="row">
                                                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 blog-item">
                                                    <div class="home-blog-section-item">
                                                        <div class="image-container">
                                                            <a href="https://rentalcarsuae.com/blogs/how-to-avoid-car-rental-scams-in-dubai/" class="hv-center">
                                                                <amp-img decoding="async" src="https://rentalcarsuae.com/wp-content/uploads/2020/04/How-to-avoid-Car-rental-Scams-in-Dubai.jpg" width="300" height="199" layout="responsive" alt="How to avoid Car rental Scams in Dubai" title="How to avoid Car rental Scams in Dubai" class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout" i-amphtml-layout="responsive" ><i-amphtml-sizer style="padding-top: 66.3333%;"></i-amphtml-sizer><img decoding="async" alt="How to avoid Car rental Scams in Dubai" src="https://rentalcarsuae.com/wp-content/uploads/2020/04/How-to-avoid-Car-rental-Scams-in-Dubai.jpg" title="How to avoid Car rental Scams in Dubai" class="i-amphtml-fill-content i-amphtml-replaced-content"></amp-img>
                                                            </a>
                                                        </div>
                                                        <div class="text-container">
                                                            <a href="https://rentalcarsuae.com/blogs/how-to-avoid-car-rental-scams-in-dubai/">
                                                                <p class="blog-heading">How to avoid Car rental Scams in Dubai</p>
                                                                <p class="blog-short-text">Several car rental agencies in Dubai are fraudulent and are known for their scams everywhere. They would make you pay additional charges or hidden charges or even ask you the entire month’s rent beforehand. You need to be cautious and do a lot of res <span>Read more...</span></p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 blog-item">
                                                    <div class="home-blog-section-item">
                                                        <div class="image-container">
                                                            <a href="https://rentalcarsuae.com/blogs/free-sanitization-of-vehicles-offered-by-rental-cars-uae-in-dubai/" class="hv-center">
                                                                <amp-img  decoding="async" src="https://rentalcarsuae.com/wp-content/uploads/2020/04/Free-Sanitization-of-Vehicles-offered-by-Rental-Cars-UAE-in-Dubai-300x188.jpg" width="300" height="188" layout="responsive" alt="Free Sanitization of Vehicles offered by Rental Cars UAE in Dubai" title="Free Sanitization of Vehicles offered by Rental Cars UAE in Dubai" class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout" i-amphtml-layout="responsive"><i-amphtml-sizer style="padding-top: 62.6667%;"></i-amphtml-sizer><img decoding="async" alt="Free Sanitization of Vehicles offered by Rental Cars UAE in Dubai" src="https://rentalcarsuae.com/wp-content/uploads/2020/04/Free-Sanitization-of-Vehicles-offered-by-Rental-Cars-UAE-in-Dubai-300x188.jpg" title="Free Sanitization of Vehicles offered by Rental Cars UAE in Dubai" class="i-amphtml-fill-content i-amphtml-replaced-content"></amp-img>
                                                            </a>
                                                        </div>
                                                        <div class="text-container">
                                                            <a href="https://rentalcarsuae.com/blogs/free-sanitization-of-vehicles-offered-by-rental-cars-uae-in-dubai/">
                                                                <p class="blog-heading">Free Sanitization of Vehicles offered by Rental Cars UAE in Dubai</p>
                                                                <p class="blog-short-text">Our dedicated team is working around the clock by sanitizing all cars provided to our customers. We believe that health is the main priority and cannot be compromised at any cost.

                                                                    The new initiative is being taken by Rental Cars UAE as part of saf <span>Read more...</span></p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 blog-item">
                                                    <div class="home-blog-section-item">
                                                        <div class="image-container">
                                                            <a href="https://rentalcarsuae.com/blogs/while-driving-an-automatic-car/" class="hv-center">
                                                                <amp-img decoding="async" src="https://rentalcarsuae.com/wp-content/uploads/2020/03/THINGS-YOU-SHOULD-NEVER-DO-WHILE-DRIVING-AN-AUTOMATIC-CAR-300x197.jpg" width="300" height="197" layout="responsive" alt="THINGS YOU SHOULD NEVER DO WHILE DRIVING AN AUTOMATIC CAR" title="THINGS YOU SHOULD NEVER DO WHILE DRIVING AN AUTOMATIC CAR" class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout" i-amphtml-layout="responsive"><i-amphtml-sizer style="padding-top: 65.6667%;"></i-amphtml-sizer><img decoding="async" alt="THINGS YOU SHOULD NEVER DO WHILE DRIVING AN AUTOMATIC CAR" src="https://rentalcarsuae.com/wp-content/uploads/2020/03/THINGS-YOU-SHOULD-NEVER-DO-WHILE-DRIVING-AN-AUTOMATIC-CAR-300x197.jpg" title="THINGS YOU SHOULD NEVER DO WHILE DRIVING AN AUTOMATIC CAR" class="i-amphtml-fill-content i-amphtml-replaced-content"></amp-img>
                                                            </a>
                                                        </div>
                                                        <div class="text-container">
                                                            <a href="https://rentalcarsuae.com/blogs/while-driving-an-automatic-car/">
                                                                <p class="blog-heading">THINGS YOU SHOULD NEVER DO WHILE DRIVING AN AUTOMATIC CAR</p>
                                                                <p class="blog-short-text">Cars with automatic gear transmission are pretty easy and comfortable to drive. They are perfect for long trips. You would never get tired of changing the gears.

                                                                    The key difference between manual gear transmission and automatic gear transmission c <span>Read more...</span></p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 blog-item">
                                                    <div class="home-blog-section-item">
                                                        <div class="image-container">
                                                            <a href="https://rentalcarsuae.com/blogs/how-to-avoid-the-busy-traffic-on-roads-in-dubai/" class="hv-center">
                                                                <amp-img decoding="async" src="https://rentalcarsuae.com/wp-content/uploads/2020/03/How-to-Avoid-the-Busy-Traffic-on-Roads-in-Dubai-300x169.jpg" width="300" height="169" layout="responsive" alt="How to Avoid the Busy Traffic on Roads in Dubai" title="How to Avoid the Busy Traffic on Roads in Dubai" class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout" i-amphtml-layout="responsive"><i-amphtml-sizer style="padding-top: 56.3333%;"></i-amphtml-sizer><img decoding="async" alt="How to Avoid the Busy Traffic on Roads in Dubai" src="https://rentalcarsuae.com/wp-content/uploads/2020/03/How-to-Avoid-the-Busy-Traffic-on-Roads-in-Dubai-300x169.jpg" title="How to Avoid the Busy Traffic on Roads in Dubai" class="i-amphtml-fill-content i-amphtml-replaced-content"></amp-img>
                                                            </a>
                                                        </div>
                                                        <div class="text-container">
                                                            <a href="https://rentalcarsuae.com/blogs/how-to-avoid-the-busy-traffic-on-roads-in-dubai/">
                                                                <p class="blog-heading">How to Avoid the Busy Traffic on Roads in Dubai</p>
                                                                <p class="blog-short-text">Dubai is always a place of tourist attraction and the central place of several hosting several fairs and galleries. So Dubai is a hub of gathering large crowd and you can expect traffic in most regions and thereby delaying the movement of the crowd f <span>Read more...</span></p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    </section>

    <form hidden>
        <button type="button" id="gbtn" hidden ></button>
    </form>


@endsection

