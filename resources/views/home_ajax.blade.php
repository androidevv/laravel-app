<div class="container padding-0">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 home-cars-wrapper">
            <p class="section-title">Frequently Booked Cars <a href="carlist" class="btn btn-blue more-cars">Browse <span>All</span> Cars</a></p>
            <div class="row main-box">

                @if(count($cars)>0)
                    @foreach($cars as $car)
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 home-cars-item-container">

                            <div class="home-cars-item" style="height: 444px;">
                                <div class="image-container">
                                    <a href="{{url('/cardetail/' . $car->car_id)}}">
                                        <img src="{{url('storage/app/car/' .$car->file)}}" width="300" height="215" class="img-fitter img-fluid" alt="Rent a car dubai" />
                                    </a>
                                </div>
                                <div class="title-container d-block d-sm-block d-md-none d-lg-none d-xl-block">
                                    <!--                                                <p class="item-title"><a href="--><!--">--><!--</a></p>-->
                                    <p class="item-title"><a href="{{url('/cardetail/' . $car->car_id)}}">{{$car->brand_name . ' ' . $car->name}}</a></p>
                                    <div class="item-category">{{$car->category_name}}
                                        <ul id="star17"><i class="fas fa-star" aria-hidden="true"></i><i class="fas fa-star" aria-hidden="true"></i><i class="fas fa-star" aria-hidden="true"></i><i class="fas fa-star" aria-hidden="true"></i><i class="fas fa-star" aria-hidden="true"></i></ul>
                                        <span class="rating">5</span>
                                    </div>
                                </div>
                                <div class="text-container">
                                    <div class="row">
                                        <ul class="item-options col-6 col-sm-6 col-md-7 col-lg-7 col-xl-6">
                                            @if($car->free_cancellation==1)  <li><i class="fas fa-check"></i>Free cancellation</li> @endif
                                            @if($car->bluetooth==1)  <li><i class="fas fa-check"></i>Bluetooth</li> @endif
                                            @if($car->free_delivery==1)  <li><i class="fas fa-check"></i>Free Delivery</li> @endif
                                            @if($car->comprehensive_insurance==1)  <li><i class="fas fa-check"></i>Comprehensive Insurance</li> @endif

                                            <li><i class="fas fa-check"></i>{{$car->milage}} Km</li>
                                            <li><i class="fas fa-check"></i>Deposit: {{$car->deposit}}</li>
                                            <li><i class="fas fa-check"></i>Excess Claim: {{$car->excess_claim}}</li>
                                            @if($car->senitized==1) <li style="color: #027baf;font-size: 90%;"><i class="fas fa-check"></i> <b>100% Sanitized</b></li> @endif
                                            <!-- <li><i class="fas fa-check"></i> 50</li> -->
                                        </ul>
                                        <div class="item-price-list col-6 col-sm-6 col-md-5 col-lg-5 col-xl-6">
                                            <ul class="price-list">
                                                <li><a href="#">{{$car->monthly_rent}} AED <small>/ Monthly</small></a></li>
                                                <li><a href="#">{{$car->weekly_rent}} AED <small>/ Weekly</small></a></li>
                                                <li><a href="#">{{$car->daily_rent}} AED <small>/ Daily</small></a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="home-cars-buttons">
                                <ul class="item-button-list">
                                    <li >
                                        {!! Form::open(['action' => 'Home@checkout' , 'method'=>'post' ]) !!}
                                        <input type="hidden" name="car_id" value="{{$car->car_id}}">
                                        <input type="hidden" name="rent" value="{{$car->monthly_rent}}">
                                        <input type="hidden" name="days" value="30">
                                        <input type="hidden" name="startDate" value="{{(isset($startDate) && $startDate ? $startDate : date("d/m/Y"))}}">
                                        <input type="hidden" name="endDate" value="{{(isset($endDate) && $endDate ? $endDate : date('d/m/Y' , strtotime("+1 month")))}}">
                                        <button class="btn btn-blue " type="submit">Book Now</button>
                                        </form>
                                    </li>
                                    <li>
                                        <a href="{{url('/cardetail/' . $car->car_id)}}" class="btn btn-blue btn-carlist-lh">View Details</a>
                                    </li>
                                    <!--												<li><a target="_blank" onclick="return gtag_report_conversion_wp('https://wa.me/+971557865406');" href="https://wa.me/+971557865406" class="btn btn-white inquiry"><i class="fa fa-whatsapp fa-1x"></i> Whatsapp</a></li>-->
                                    <li><a href="javascript:void(0)" data-toggle="modal" data-target="#inquiry"  data-monthly="{{$car->monthly_rent}}" data-weekly="{{$car->weekly_rent}}" data-daily="{{$car->daily_rent}}" data-car_id="{{$car->car_id}}"  data-car="{{$car->name}}" data-type="{{$car->category_name}}" data-company="{{$car->brand_name}}" data-date1="{{date("d/m/Y")}}" data-date2="{{(isset($endDate) && $endDate ? $endDate : date('d/m/Y' , strtotime("+1 month")))}}" data-duration="30" data-amount="{{$car->monthly_rent}}" class="btn btn btn-blue btn-carlist-lh inquiry">Send Inquiry</a></li>
                                </ul>
                            </div>
                        </div>
                    @endforeach
                @endif


            </div>

            <a class="btn-all-cars btn btn-blue" style="padding: 0.75rem 2rem;display: block;clear: both;width: max-content;margin: 1rem auto;" href="{{route('/carlist')}}">Browse All Cars</a>

            <section class="home-blog-section">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 home-blog-section-wrapper padding-0">
                        <p style="text-align: center;" class="section-title">Latest Blogs</p><br>
                        <div class="home-blog-section-container">
                            <div class="container padding-0">
                                <div class="home-blog-section-items-container">
                                    <div class="row">
                                        @foreach($blogs as $blog)

                                        <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 blog-item">
                                            <div class="home-blog-section-item">
                                                <div class="image-container">
                                                    <a href="{{url('/blog/' . $blog->slug)}}" class="hv-center">
                                                        <img decoding="async" alt="{{url('storage/app/blog/' .$blog->name)}}" src="{{url('storage/app/blog/' .$blog->file)}}" title="{{url('storage/app/blog/' .$blog->name)}}" class="i-amphtml-fill-content i-amphtml-replaced-content">
                                                    </a>
                                                </div>
                                                <div class="text-container">
                                                    <p class="blog-heading">{{$blog->name}}</p>
                                                    <p class="blog-short-text">
                                                        {!! substr(strip_tags($blog->content) ,'0', '150') !!}
                                                    </p>
                                                    <a href="{{url('/blog/' . $blog->slug)}}">
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
            
            
        <div class="text-container">
            <h1><strong>Rent a Car Dubai Monthly</strong></h1> 
            
            <p class="MsoNormal" style="text-align:justify">Kohistanrentacar.com is a well-known service provider of rent a car Dubai Monthly. We being a professional and well-experienced monthly car rental Dubai believes that renting a quality car from a well-known Dubai rent a car company like us should be as easy as picking a movie to watch with friends or relatives. The selection must be hassle-free and additionally with no sort of hidden charges. We here at Kohistanrentacar.com and it have a massive fleet of luxurious and executive class vehicles, which are available on both lease and rent to locals and foreign tourists at a reasonable price tag.</p>
            <br>
            
            <p class="MsoNormal" style="text-align:justify">We offer advance-booking facility along with reasonable car leasing for the convenience of our valued customers. It really does not matter where you are or when you want to cheap rent a car  Dubai, you can rent it from us in an effortless manner. We are offering cheap car rentals packages for the convenience of our valued customers. No matter how much budget you have, you can effortlessly rent a car Dubai or get a car service from us in an effortless manner. We feel proud in welcoming our customers to come and visit us to avail of our cheap car rental company Dubai.</p>
            
        <br>
        <h2>
            <strong>Our Special Packages for Monthly Rental cars</strong>
        </h2>
        
        <p class="MsoNormal" style="text-align:justify">We offer daily to monthly car rental Dubai packages, which you can select as per your convenience or requirement during your visit to Dubai or abu dhabi in uae. Visit us today to explore our market competitive car hire Dubai plans for a memorable and cost-effective driving experience. There is no registration fee, no maintenance woes, and no insurance charges if you decide to get a car on rent from us. Nowadays, driving a rental Luxury cars is without a doubt a smart choice when compared to buying a new vehicle and being stuck in paying the EMIs for the years to come.</p>
            <br>
            <p class="MsoNormal" style="text-align:justify">We have significant years of experience in the car rental industry in united arab emirates, which makes us one of the most experienced monthly car rental in Dubai providing company in uae. No matter if you need car hire a professional to rent a car service or a prompt hire a car in uae, you can simply get in touch with us for getting a market competitive monthly car rental in dubai and the car hire rates. Cheap car rental in Dubai and car lease charges, which makes us quite famous among our valued customers. For daily or monthly car rental Dubai rates as well as abu dhabi, you can also get in touch with us to enjoy a memorable driving experience with driving license. You can check the car list to hire your desired cars.</p>
            <br>
            <h2>Why us for Rent a Car Dubai Services:</h2>
            <p class="MsoNormal" style="text-align:justify">We are here to provide our valued customers car rental Dubai service at an economical price and also cheap monthly basis car rental deals. We are offering prompt the car rental in the uae a proficient manner. So, without waiting any further, get in touch with us today to make your transfers full of comfort and luxury in a proficient manner. We extended our monthly car hire service to united arab emirates residents and tourists. Long Term Car Rental Be it a small city-car like abu dhabi to smoothly move around the busy streets of abu dhabi or something more substantial in stature; our long-term car lease plans will help make your travels within dubai and abu dhabi more comfortable. So, if you are staying anywhere in Dubai per month, this is the best option for you and you can hire long term car rental through our site.

</p>
<br>
<h2>
    When to Choose Professionals for Rent a Car in Dubai
</h2>
<p class="MsoNormal" style="text-align:justify">This is one of the most asked questions when looking for a reliable and instant transportation service anywhere in Dubai. Well, the answer to this question is simple, whenever you need affordable and economical transportation services for your family and friends, you should simply select a professional rental company, who is offering a reliable service of the rental cars in Dubai.Its one of the best transportation facilities in the city. </p>
<br>
<p class="MsoNormal" style="text-align:justify">This transportation service is ideal for both short and long-distance tour in united arab emirates. If you are planning to see the top tourist destinations anywhere in Dubai or may have planned for sightseeing with loved ones, car rental service is indeed the ideal option. It will certainly effectively fulfill your transportation needs. 

</p>
<br>
<p class="MsoNormal" style="text-align:justify">There are several rental companies in dubai, abu dhabi united arab emirates, who claim to offer economical and instant the rental car services to their valued customers in Dubai and its suburbs, but you must select your rental service company that has vast years of experience in the related field. It is because only then you will be able to experience your tour luxuriously. They have a team of professional chauffeurs, who are fully aware of the routes of the city. </p>
<br>
<p class="MsoNormal" style="text-align:justify">Moreover, they have an extensive fleet of executive class vehicles that are at an affordable cheap monthly rent a car. Thus, if you are looking for instant as well as reliable service of rent a car Dubai monthly, Kohistanrentacar.com is the best option in this regard. Please explore our <a href="https://kohistanrentacar.com/carlist">Cars List</a>. You should without any doubt, go for this professional transportation service because it has vast years of experience in the related field. 
</p>
<br>

<h2>Which is the right vehicle for my trip?</h2>
<br>
<p class="MsoNormal" style="text-align:justify"> Your choice of vehicle for your upcoming trip should be selected based on your travel requirements and the number of passengers. If you are traveling as afamily and have children in the group, we recommend an SUV or a 4X4 as your monthly car rental choice.
</p>
<br>

<p class="MsoNormal" style="text-align:justify">However, the selection of an ideal rental package that will suit your needs and most importantly budget is for sure necessary.</p>
<br>
<p class="MsoNormal" style="text-align:justify">Finding professional companies offering cheap car rental Dubai services is now not a difficult task nowadays, as you can take the help of the internet and search for such companies in your area. However, you must find a rental company that has vast years of experience in the related field. It is because only then you will be able to make your traveling experience memorable. </p>
  
  <br>
  <p class="MsoNormal" style="text-align:justify">
      Most professional car rental companies have a large fleet of luxury vehicles that include BMW, Mercedes, Range Rover, Limousine, and many more popular brand vehicles. Thus, if you are looking for a company that is offering cheap rental car service for various occasions and transfers, Kohistan Rent a Car is one of the best available options for you in this regard.
  </p>
  <br>
        </div>

        </div>
    </div>


</div>
