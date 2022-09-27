@extends('layouts.header')

@section('content')

    <section class="items-details-page" data-id="2308">
        <div class="container padding-0">
            <div class="row">
                <section class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pp-md-none pl-md-none pp-md-none pl-sm-none">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 padding-0">
                            <div class="title-wrapper">
                                <h1>{{$car->name}}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="side-booking-form-container col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 pp-none pl-none pp-sm-none pl-sm-none pp-md-none pl-md-none pp-lg-none pl-lg-none pp-xl-none pl-xl-none d-none d-sm-none d-md-block d-lg-block d-xl-block">
                            {!! Form::open(['action' => 'EmailsController@carBooking' , 'method'=>'post']) !!}
                                <div class="hidden-fields" hidden>
                                    <input type="hidden" name="carid" value="{{$car->car_id}}">
                                    <input type="hidden" id="car_name" name="car" value="{{$car->name}}">
                                    <input type="hidden" name="company" value="{{$car->category_name}}">
                                    <input type="hidden" name="duration" value="30">
                                    <input type="hidden" name="rentalAmount" value="{{$car->monthly_rent}}">
                                    <input type="hidden" name="vat_amount" value="">
                                    <input type="hidden" name="start_date" value="">
                                    <input type="hidden" name="end_date" value="">
                                    <input type="hidden" name="totalAmount" value="">
                                    <input type="hidden" name="delivery_charge" value="{{$car->delivery_pickup_charge}}">
                                    <input type="hidden" name="pickup_charge" value="{{$car->delivery_pickup_charge}}" >
                                    <input type="hidden" name="supercdw_charge" value="250" >
                                    <input type="hidden" name="additional_driver_charge" value="0" >
                                </div>
                                <div class="customer-info">
                                    <p class="side-form-title">Book this car now</p>
                                    <div class="row">
                                        <div class="col-6 form-input-item">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input data-hj-whitelist type="text" class="form-control" name="name" value="" required />
                                                <small class="form-text">Please enter your name</small> </div>
                                        </div>
                                        <div class="col-6 form-input-item">
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input data-hj-whitelist type="text" class="form-control" name="email" value="" required/>
                                                <small class="form-text">Please enter your email address</small> </div>
                                        </div>
                                        <div class="col-6 form-input-item">
                                            <div class="form-group">
                                                <label>Number</label>
                                                <input data-hj-whitelist type="text" class="form-control" id="phone" name="number" required value=""/>
                                                <small class="form-text">Please enter your contact number</small> </div>
                                        </div>
                                        <div class="col-6 form-input-item">
                                            <div class="form-group">
                                                <label>Address</label>
                                                <input data-hj-whitelist type="text" class="form-control" name="address" required value=""/>
                                                <small class="form-text">Please enter delivery address</small> </div>
                                        </div>
                                        <div class="col-6 form-input-item">
                                            <div class="form-group">
                                                <label>City</label>
                                                <input data-hj-whitelist type="text" class="form-control" name="city" value="Dubai" />
                                                <small class="form-text">Please enter your UAE residence city</small> </div>
                                        </div>
                                        <div class="col-6 form-input-item">
                                            <div class="form-group">
                                                <label>Country</label>
                                                <input data-hj-whitelist type="text" class="form-control" name="country" value="UAE" readonly />
                                                <small class="form-text">Please enter only UAE</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- </form> -->
                                <!-- <form class="dates-form" method="post" action="#"> -->
                                <div class="booking-dates">
                                    <!-- <input type="text" class="myrangepicker" value="" /> -->
                                    <p class="side-form-title">Booking Dates</p>
                                    <div class="dates-input-group">
                                        <input data-hj-whitelist type="text" class="form-control datepicker" id="from_date" name="startDate" value="{{(isset($startDate) && $startDate ? $startDate : date("d/m/Y"))}}" readonly />

                                        <span class="input-group-text">to</span>
                                        <input data-hj-whitelist type="text" class="form-control datepicker" id="to_date" name="endDate" value="{{(isset($endDate) && $endDate ? $endDate : date('d/m/Y' , strtotime("+1 month")))}}" readonly />

                                        <div class="hidden-fields" hidden>
                                            <input type="hidden" name="id" value="{{$car->car_id}}" >
                                        </div>
                                        <button type="button" id="syncbtn" class="btn btn-blue"><i class="fas fa-sync"></i></button>
                                    </div>
                                    <small class="form-text" style="display: none; color: red;" id="date_err"></small>
                                </div>
                                <div class="rental-amount">
                                    <p class="side-form-title">Rent Amount</p>
                                    <ul>
                                        <?php $rent = (isset($rent))? $rent: $car->monthly_rent; ?>
                                        <li class="initial active" data-attach="price" data-email="initial" data-amount="{{$rent}}"> <i class="far fa-circle"></i> <span class="btn-title">Rent</span> <span class="btn-price">AED <span class="base-price">{{$rent}}</span></span> </li>
                                    </ul>
                                </div>
                                <div class="add-ons-options">
                                    <p class="side-form-title">Add-ons</p>
                                    <ul>
                                        <li class="delivery" data-attach="depi" data-email="delivery" data-amount="{{$car->delivery_pickup_charge}}"> <i class="far fa-circle"></i> <span class="btn-title">Car Delivery Charges</span> <span class="btn-price">AED <span class="delivery-price">{{$car->delivery_pickup_charge}}</span></span> </li>
                                        <li class="pickup" data-attach="depi" data-email="pickup" data-amount="{{$car->delivery_pickup_charge}}"> <i class="far fa-circle"></i> <span class="btn-title">Car Pickup Charges</span> <span class="btn-price">AED <span class="pickup-price">{{$car->delivery_pickup_charge}}</span></span> </li>
                                        <li class="cdw" data-attach="addons" data-email="cdw" data-amount="250"> <i class="far fa-circle"></i> <span class="btn-title">Super CDW</span> <span class="btn-price"> AED <span class="cdw-price">250</span></span> </li>
                                        <li class="driver" data-attach="addons" data-email="driver" data-amount="0"> <i class="far fa-circle"></i> <span class="btn-title">Additional Driver</span> <span class="btn-price"> AED <span class="driver-price">0</span></span> </li>
                                    </ul>
                                </div>
                                <div class="rental-amount">
                                    <p class="side-form-title">Booking Amount</p>
                                    <ul>
                                        <input type="hidden" class="vat-charge" value="0.05" />
                                        <li class="vat active" data-attach="price" data-email="vat" data-amount="{{round($rent*0.05)}}"> <i class="far fa-circle"></i> <span class="btn-title">VAT (5%)</span> <span class="btn-price">AED <span class="vat-price">{{round($rent*0.05)}}</span></span> </li>
                                        <li class="b active" data-attach="price" data-email="rental" data-amount="{{round($rent*0.05) + $rent}}"> <i class="far fa-circle"></i> <span class="btn-title">Total Amount</span> <span class="btn-price">AED <span class="total-price">{{round($rent*0.05) + $rent}}</span></span> </li>
                                    </ul>
                                </div>
                                <div class="btn-booking">
                                    <button type="submit" name="book_now" onclick="gtag_report_conversion_book_now();"  class="btn-side-booking-form btn btn-blue">Book This Now</button>
                                </div>
                            </form>
                        </div>

                        <div class="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 pp-none pl-none pp-sm-none pl-sm-none pp-md-none pl-md-none pp-lg-none pl-lg-none pp-xl-none pl-xl-none">
                            <div class="row">
                                <div class="item-display col-sm-12">
                                    <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><i class="far fa-image"></i> <span>Vehicle image</span></a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active car-image" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <img src="{{url('storage/app/car/' .$car->file)}}" width="502" height="382" class="img-fluid" alt="{{$car->name}}" title="{{$car->name}}"/>
                                        </div>
                                        <div class="tab-pane fade car-video" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <iframe width="560" height="315" src="#" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>

                                </div>
                                <div class="item-btn-container col-sm-12 padding-0 detail-pricelist">
                                    <div class="price-list">
                                        <ul class="d-none d-sm-none d-md-block d-lg-block d-xl-block " id="price_list">
                                            @if(isset($days))
                                                <li id="monthly_rent" data-value="{{$car->monthly_rent}} ">AED {{$rent}} <small>/ {{$days}} days</small></li>
                                            @else
                                                <li id="monthly_rent" data-value="{{$car->monthly_rent}} ">AED {{$car->monthly_rent}} <small>/ Monthly</small></li>
                                                <li id="weekly_rent" data-value="{{$car->weekly_rent}} ">AED {{$car->weekly_rent}} <small>/ Weekly</small></li>
                                                <li id="daily_rent" data-value="{{$car->daily_rent}} ">AED {{$car->daily_rent}} <small>/ Daily</small></li>
                                            @endif
                                        </ul>

                                    </div>
                                    <div class="btn-list">
                                        <ul>
                                            <li><a href="javascript:void(0)" class="btn btn-blue" data-toggle="modal" data-target="#callBack">Request Call</a></li>
                                            <li><a href="javascript:void(0)" data-toggle="modal" data-target="#inquiry" data-monthly="{{$car->monthly_rent}}" data-weekly="{{$car->weekly_rent}}" data-daily="{{$car->daily_rent}}" data-carid="{{$car->car_id}}" data-car="{{$car->name}}" data-type="{{$car->category_name}}" data-company="{{$car->brand_name}}" data-date1="{{(isset($startDate) && $startDate ? $startDate : date("d/m/Y"))}}" data-date2="{{(isset($endDate) && $endDate ? $endDate : date('d/m/Y' , strtotime("+1 month")))}}" data-duration="{{(isset($days))?$days:30}}" data-amount="{{(isset($rent))?$rent:$car->monthly_rent}}" class="btn btn-blue inquiry btn-carlist-lh">Send Inquiry</a></li>
                                            <li class="d-md-none d-lg-none d-xl-none">
                                                <form action="https://kohistanrentacar.com/car-checkout/" method="post">
                                                    <input type="hidden" name="car_chk_id" value="16">
                                                    <input type="hidden" name="car_from" value="16/03/2020">
                                                    <input type="hidden" name="car_to" value="15/04/2020">
                                                    <button class="btn btn-blue " type="submit">Book Now</button>
                                                    <br />
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="item-options-list col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 pp-none pl-none pp-sm-none pl-sm-none">
                                    <p class="side-form-title">Car Features</p>
                                        <ul>
                                            @if($car->bluetooth==1)
                                                <li data-toggle="tooltip" data-placement="top" title="This vehicle comes with Bluetooth option.">
                                                    <i class="fa fa-bluetooth"></i>&nbspBluetooth
                                                </li>
                                            @endif

                                            <li data-toggle="tooltip" data-placement="top" title="This vehicle demands AED {{$car->deposit}} as security deposite."><i class="far fa-credit-card"></i> Deposit: {{$car->deposit}}</li>

                                            <li data-toggle="tooltip" data-placement="top" title="In case of accident you have to pay AED {{$car->excess_claim}} as maximum liability."><i class="fa fa-money"></i> Excess Claim: {{$car->excess_claim}}</li>

                                            @if($car->free_delivery==1)
                                                <li data-toggle="tooltip" data-placement="top" title="This vehicle comes with free delivery and pickup option.">
                                                    <i class="fa fa-truck"></i>&nbspFree Delivery and Pickup
                                                </li>
                                            @else
                                                <li data-toggle="tooltip" data-placement="top" title="This vehicle has delivery Charge {{$car->delivery_pickup_charge}} AED."><i class="fas fa-car"></i>Delivery & Pickup Charge: {{$car->delivery_pickup_charge}} AED</li>
                                            @endif

                                            @if($car->free_cancellation==1)
                                                <li data-toggle="tooltip" data-placement="top" title="You can cancel booking for this vehicle without any charges."><i class="fas fa-close"></i> Free Cancellation</li>
                                            @endif

                                            @if($car->camera==1)
                                                <li data-toggle="tooltip" data-placement="top" title="You can cancel booking for this vehicle without any charges."><i class="fas fa-camera"></i> Camera</li>
                                            @endif

                                            @if($car->comprehensive_insurance==1)
                                                <li data-toggle="tooltip" data-placement="top" title="You can cancel booking for this vehicle without any charges."><i class="fas fa-medkit"></i> Comprehensive Insurance</li>
                                            @endif

                                            @if($car->navigation==1)
                                                <li data-toggle="tooltip" data-placement="top" title="You can cancel booking for this vehicle without any charges."><i class="fas fa-map-marker"></i>Navigation</li>
                                            @endif

                                            @if($car->cruise_control==1)
                                                <li data-toggle="tooltip" data-placement="top" title="You can cancel booking for this vehicle without any charges."><i class="fas fa-ship"></i>Cruise Control</li>
                                            @endif

                                            @if($car->parking_sensor==1)
                                                <li data-toggle="tooltip" data-placement="top" title="You can cancel booking for this vehicle without any charges."><i class="fas fa-parking"></i>Parking Sensor</li>
                                            @endif
                                    </ul>
                                </div>
                                <div class="faq-list col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 pp-none pl-none pp-sm-none pl-sm-none">
                                    <p class="side-form-title">Frequently Asked Questions</p>
                                    <ul>
                                        <li class="faq-item1"> <a class="faq-item-link" href="javascript:void(0)">How much I will be charged for crossing salik gate?<i class="fas fa-plus"></i></a>
                                            <div class="answer"><p>You will be charged AED 5 on every salik gate crossing and will be billed at the end of your rental duration.</p></div>
                                        </li>
                                        <li class="faq-item1"> <a class="faq-item-link" href="javascript:void(0)">What type of vehicle insurance will I receive by default?<i class="fas fa-plus"></i></a>
                                            <div class="answer"><p>Vehicles are covered by full comprehensive insurance as per the UAE laws. However, a police report must be obtained at the time of an accident or in case of damage. If the renter failed to produce a valid police report to Car Provider, all charges incurred will be the responsibility of the client, even if CDW has been taken. No replacement vehicle will be supplied and rental charges will continue until a police report is received along with any other relevant documents. In case of an accident and/or damage, the client is required to pay excess liability if CDW is not taken. A valid Police report is also required. In the event of theft of a rented vehicle, the police must be notified immediately; otherwise cover would be rendered void.&nbsp;&nbsp;&nbsp; Insurance covers use of the vehicle in U.A.E. only, unless prior agreement is given by Car Provider.</p></div>
                                        </li>
                                        <li class="faq-item1"> <a class="faq-item-link" href="javascript:void(0)">When I will get my security deposit back?<i class="fas fa-plus"></i></a>
                                            <div class="answer"><p>The security deposit will be released 21 days after returning the car through cheque or UAE bank account deposit.<br /><br /></p></div>
                                        </li>
                                        <li class="faq-item1"> <a class="faq-item-link" href="javascript:void(0)">What if I exceed allowed kms?<i class="fas fa-plus"></i></a>
                                            <div class="answer"><p>If you exceed the allowed kms then there will be additional charge of 0.50 AED per kilometer.</p></div>
                                        </li>
                                        <li class="faq-item1"> <a class="faq-item-link" href="javascript:void(0)">What is the minimum age limit to hire this vehicle?<i class="fas fa-plus"></i></a>
                                            <div class="answer"><p>The supplier of this vehicle needs the driver to be minimum 21 years of age.</p></div>
                                        </li>
                                        <li class="faq-item1"> <a class="faq-item-link" href="javascript:void(0)">What documents are required to deliver your vehicle after online booking? <i class="fas fa-plus"></i></a>
                                            <div class="answer">
                                                <div class="row">
                                                    <div class="col-6 doc-list-item">
                                                        <p class="side-form-title">For Residents</p>
                                                        <ul>
                                                            <li>1. Copy of Passport</li>
                                                            <li>2. Copy of Resident Visa</li>
                                                            <li>3. UAE Driving License</li>
                                                            <li>4. Credit Card</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-6 doc-list-item">
                                                        <p class="side-form-title">For Tourists</p>
                                                        <ul>
                                                            <li>1. Copy of Passport</li>
                                                            <li>2. Copy of Visit Visa</li>
                                                            <li>3. US, Canada, EU, GCC or International Driving License</li>
                                                            <li>4. Credit Card</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>

    <script>
        $(document).ready(function(){

            $('.faq-item-link').on('click', function(e){
                e.preventDefault();
                
                $(this).find('i').toggleClass('fa-plus fa-minus');
                $(this).closest('li').find('.answer').slideToggle();
            });
             
            $('.datepicker').on('changeDate', function(e){
                e.preventDefault();

                var date1 = $("#from_date").val();
                var date_1 = date1.split("/").reverse().join("-");

                var date2 = $("#to_date").val();
                var date_2 = date2.split("/").reverse().join("-");

                var d1 = new Date(date_1);
                var d2 = new Date(date_2);

                if (d2.getTime() <= d1.getTime()) {
                    $("#date_err").show();
                    $("#date_err").text("Sorry, you can't choose previous date");
                    var nextdate = $('#from_date').datepicker('getDate');
                    var nnn = new Date(nextdate.getTime() + 86400000);
                    $("#to_date").datepicker('setDate', nnn);

                    setTimeout(function(){$("#date_err").hide();},3000);
                    return false;
                }

                var car = $('#car_name').val();
                var amount = $('.base-price').text();
                var daily = $('#daily_rent').data('value');
                var weekly = $('#weekly_rent').data('value');
                var monthly = $('#monthly_rent').data('value');
                var dl_charge = $('.delivery-price').text();
                var current_total = $('.total-price').text();
                var current_base = $('.base-price').text();
                var vat_charge = $('.vat-charge').val();
                var dates = date1+' - '+date2;
                var dates_spl = dates.split(' - ');
                var dates_spl1 = dates_spl[0].split('/');
                var dates_spl2 = dates_spl[1].split('/');
                var fromDate = new Date(dates_spl1[2]+'-'+dates_spl1[1]+'-'+dates_spl1[0]);
                var toDate = new Date(dates_spl2[2]+'-'+dates_spl2[1]+'-'+dates_spl2[0]);
                var diff = new Date(toDate - fromDate);
                var days = diff/1000/60/60/24;
                if(days == 0){
                    var days = 1;
                } else {
                    var days = days;
                }
                if(days < 7){
                    var rent = daily*days;
                    var dl_charge = 100;
                } else if(days > 6 && days < 30){
                    var div = weekly/7
                    var rent = Math.round(div*days);
                } else if(days > 29){
                    var div = monthly/30;
                    var rent = Math.round(div*days);
                }

                var vat_cal = Math.round((rent*vat_charge));
                $('input#from_date').val(dates_spl[0]);
                $('input#to_date').val(dates_spl[1]);
                $('.base-price').text(rent);

                if ($('.side-booking-form-container .add-ons-options li.delivery').hasClass('active')) {
                    dl_charge = dl_charge;
                }
                else{
                    dl_charge = 0;
                }

                if ($('.side-booking-form-container .add-ons-options li.pickup').hasClass('active')) {
                    pickup = $('.side-booking-form-container .add-ons-options li.pickup').data('amount');
                }
                else{
                    pickup = 0;
                }

                if ($('.side-booking-form-container .add-ons-options li.cdw').hasClass('active')) {
                    cdw = $('.side-booking-form-container .add-ons-options li.cdw').data('amount');
                }
                else{
                    cdw = 0;
                }

                if ($('.side-booking-form-container .add-ons-options li.driver').hasClass('active')) {
                    driver = $('.side-booking-form-container .add-ons-options li.driver').data('amount');
                }
                else{
                    driver = 0;
                }
                var final_total = parseInt(rent)+parseInt(dl_charge)+parseInt(pickup)+parseInt(cdw)+parseInt(driver)+parseInt(vat_cal);
                $('.total-price').text(final_total);
                // set values
                $('input[name=duration]').val(days);
                $('input[name=rentalAmount]').val(rent);
                $('input[name=vat]').val(vat_cal);
                $('input[name=start_date]').val(date1);
                $('input[name=end_date]').val(date2);
                $('input[name=totalAmount]').val(parseInt($('.total-price').text()));
                $('input[name=vat_amount]').val(vat_cal);
                $('input[name=delivery_charge]').val(dl_charge);
                $('input[name=pickup_charge]').val(pickup);
                $('span.delivery-price').text(dl_charge);
                $('[data-email="delivery"]').attr('data-amount',dl_charge);
                $('.vat-price').text(vat_cal);
            });
        });
    </script>

@endsection
