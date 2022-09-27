@extends('layouts.header')

@section('content')

<section class="about-header-section"  style="background: url({{asset('images/about_us.jpg')}});" >
    <div class="container">

    </div>
</section>

<section class="home-blog-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div>
                    <p class="\&quot;aboutkohistancar_text\&quot;">Kohistan rent a car is providing car rental services across Dubai. A company started with an aim to serve its customers in the best way possible, and till date it is providing high quality cars, superlative service and unmatchable professionalism to its customers. You can explore Dubai,UAE with a car that suites your personality and you can select any car from our fleet to enjoy your stay and traveling in Dubai.</p>
                    <p class="\&quot;aboutkohistancar_text\&quot;">We have wide range of cars with customized budget for daily, weekly and even monthly car rental service. We are available online at all the social media platforms and with live chat on website; you can talk to our agent anytime you want.</p>
                    <p class="\&quot;aboutkohistancar_text\&quot;">For us, customer service matters. Traveling in Dubai,UAE can be done through various sources but enjoying and exploring true colors of the city requires a car, and we can surely provide you with one. We are providing cars for tours, business trips, personal use and buses for hotels and companies to carry their staff and employees.</p>
                    <p class="\&quot;aboutkohistancar_text\&quot;">We are easy to contact, flexible in rates, give priority to customer satisfaction and with the passage of time updating our fleet as well. So, contact us now if you are looking for a reliable and professional car rental company.</p>                        </div>
            </div>
        </div>
    </div>
</section>
<section class="About-tab">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="benefits-item">BENEFITS</h1>
                <div class="benefits-item-text">Superlative service & unmatchable professionalism</div>

            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <!-- Swiper -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="row">
                            <div class="col-md-1"></div>
                            <div class="col-xs-6 col-md-2">
                                <div class="card">
                                    <div class="card-img">
                                        <img src="{{ asset('images/wash_car.jpg')}}" alt="Car Wash Service">
                                    </div>
                                    <div class="card-body">
                                        <h5>Wash and service</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-2">
                                <div class="card">
                                    <div class="card-img">
                                        <img src="{{asset('images/exotic.jpg')}}" alt="Exotic">
                                    </div>
                                    <div class="card-body">
                                        <h5>Exotic Cars</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-2">
                                <div class="card">
                                    <div class="card-img">
                                        <img src="{{asset('images/24_hour.jpg')}}" alt="24 hour service">
                                    </div>
                                    <div class="card-body">
                                        <h5>24HR customer service</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-2">
                                <div class="card">
                                    <div class="card-img">
                                        <img src="{{asset('images/free_delivery.jpg')}}" alt="Free Delivery">
                                    </div>
                                    <div class="card-body">
                                        <h5>Free Delivery & Pickup</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-2">
                                <div class="card">
                                    <div class="card-img">
                                        <img src="{{asset('images/full_insurance.png')}}" alt="Full Insurance">
                                    </div>
                                    <div class="card-body">
                                        <h5>FULL INSURANCE</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
                <!-- Add Arrows -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    </div>
</section>
<div class="container-fluid p-0">
    <div class="container">
        <div class="formBox">

            {!! Form::open(['action' => 'EmailsController@aboutUsForm' , 'method'=>'post']) !!}
                <input type="text" class="daterangepicker" name="dates" readonly />
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="benefits-item">SEARCH A CAR</h1>
                        <div class="benefits-item-text">TRY US ONCE, AND FEELTHE DIFFERENCE!</div>
                    </div>
                </div>
                <div id="searchmsgdiv"></div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="inputBox ">
                            <input type="text" class="form-control aboutus " id="first_name" name="first_name" placeholder="First Name *" required>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="inputBox">
                            <input type="text" class="form-control aboutus " id="last_name" name="last_name" placeholder="Last Name *" required>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="inputBox">
                            <input type="text" class="form-control aboutus " id="mobile" name="mobile" maxlength="12" placeholder="MobileNo. *" required>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="inputBox">
                            <input type="email" class="form-control aboutus " id="email" name="email" placeholder="Email-Id *" required>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="inputBox">
                            <input data-hj-whitelist  type="text" class="form-control aboutus datepicker" id="startDate" name="startDate" placeholder="Pickup date *" readonly required>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="inputBox">
                            <input type="text" class="form-control aboutus datepicker" id="endDate" name="endDate"  placeholder="Return Date *" readonly required>
                        </div>
                        <small class="form-text" style="display: none; color: red;" id="date_err"></small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="inputBox">
                            <select required class="form-control  aboutus" name="vehicle" id="exampleFormControlSelect1">
                                @foreach($cars as $car)
                                <option value="{{$car->car_id}}">{{$car->brand_name . ' ' .$car->name}}</option>
                                @endforeach

                            </select>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <div class="inputBox">
                            <textarea class="form-control aboutus"  id="message" name="message" placeholder="Message" maxlength="140" rows="2"  style="height:140px;"></textarea>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="action" id="action" value="searchcar"/>
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <input type="submit" name="submit" class="button searchBtn" value="SEND">
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
