@extends('layouts.header')

@section('content')
    <style>
        @media only screen and (max-width: 768px) {
            .sticky_email_btn, .sticky_phone_btn{
                display: none;
            }
        }
    </style>
    <section>
        <div class="container padding-0 checkout-loader">
            <div class="row">
                <section class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pp-md-none pl-md-none pp-md-none pl-sm-none">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pp-none pl-none pp-sm-none pl-sm-none pp-md-none pl-md-none">
                            <div class="title-wrapper">
                                <h1>Booking for {{$car->name}} &#8211; Brand New</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pp-none pl-none pp-sm-none pl-sm-none pp-md-none-left pl-md-none-left">
                            <div class="share-options">
                                <button><i class="fas fa-share-alt"></i></button>
                                <input type="text" id="inputCopy" value="" />
                                <ul>
                                    <li class="copytext" data-clipboard-target="#inputCopy" onclick="showToast('Link copied successfully')"><i class="far fa-copy"></i> Copy Link</li>
                                    <li><a href="https://api.whatsapp.com/send?text={{url('/cardetail/' . $car->car_id)}}" data-action="share/whatsapp/share"><i class="fab fa-whatsapp"></i> Whatsapp</a></li>
                                    <li><a href=""><i class="far fa-comment"></i> Message</a></li>
                                </ul>
                            </div>

                            <img src="{{url('storage/app/car/' .$car->file)}}" class="img-fluid b-center" alt="{{$car->name}} available on promotional prices" title="{{$car->name}} available on promotional prices" />

                            <div class="daterange">
                                <form method="post" action="">
                                    <input data-hj-whitelist type="hidden" name="car_chk_id" value="{{$car->car_id}}" />
                                    <input data-hj-whitelist type="hidden" name="rentAmount" value="{{$car->monthly_rent}}">
                                    <input data-hj-whitelist type="text" name="startDate" id="st_date_chk" class="form-control datepicker" value="{{$startDate}}" readonly />
                                    <span class="input-group-text">to</span>
                                    <input data-hj-whitelist type="text" name="endDate" id="en_date_chk" class="form-control datepicker" value="{{$endDate}}" readonly />
                                    <input data-hj-whitelist type="hidden" name="car_from" value="{{$startDate}}" />
                                    <input data-hj-whitelist type="hidden" name="car_to" value="{{$endDate}}" />
                                    <button class="btn btn-blue" type="submit" disabled>Change</button>
                                </form>
                                <small class="form-text" style="display: none; color: red;" id="date_err"></small>
                            </div>
                            <ul class="car-features">
                                @if($car->bluetooth==1)
                                    <li data-toggle="tooltip" data-placement="top" title="This vehicle comes with Bluetooth option.">
                                        <i class="fa fa-bluetooth"></i>&nbspBluetooth
                                    </li>
                                @endif

                                @if($car->free_delivery==1)
                                    <li data-toggle="tooltip" data-placement="top" title="This vehicle comes with free delivery and pickup option.">
                                        <i class="fa fa-bluetooth"></i>&nbspFree Delivery and Pickup
                                    </li>
                                @else
                                    <li data-toggle="tooltip" data-placement="top" title="This vehicle has delivery Charge {{$car->delivery_pickup_charge}} AED."><i class="fas fa-car"></i>Delivery & Pickup Charge: {{$car->delivery_pickup_charge}} AED</li>
                                @endif

                                @if($car->free_cancellation==1)
                                    <li data-toggle="tooltip" data-placement="top" title="You can cancel booking for this vehicle without any charges."><i class="fas fa-ban"></i> Free Cancellation</li>
                                @endif

                                @if($car->camera==1)
                                    <li data-toggle="tooltip" data-placement="top" title="You can cancel booking for this vehicle without any charges."><i class="fas fa-ban"></i> Camera</li>
                                @endif

                                @if($car->comprehensive_insurance==1)
                                    <li data-toggle="tooltip" data-placement="top" title="You can cancel booking for this vehicle without any charges."><i class="fas fa-ban"></i> Comprehensive Insurance</li>
                                @endif

                                @if($car->navigation==1)
                                    <li data-toggle="tooltip" data-placement="top" title="You can cancel booking for this vehicle without any charges."><i class="fas fa-ban"></i>Navigation</li>
                                @endif

                                @if($car->cruise_control==1)
                                    <li data-toggle="tooltip" data-placement="top" title="You can cancel booking for this vehicle without any charges."><i class="fas fa-ban"></i>Cruise Control</li>
                                @endif

                                @if($car->parking_sensor==1)
                                    <li data-toggle="tooltip" data-placement="top" title="You can cancel booking for this vehicle without any charges."><i class="fas fa-ban"></i>Parking Sensor</li>
                                @endif

                            </ul>
                            <ul class="car-features">
                                <li>Security Deposit <span class="spacer"></span> {{$car->deposit}}</li>
                                <li>Excess Claim <span class="spacer"></span> {{$car->excess_claim}}</li>
                            </ul>

                            <div class="requirments">
                                <div class="row">
                                    <div class="col-6 doc-list-item">
                                        <p class="subsection-title">For Residents</p>
                                        <ul style="padding-left:0px !important;">
                                            <li>1. Copy of Passport</li>
                                            <li>2. Copy of Resident Visa</li>
                                            <li>3. UAE Driving License</li>
                                            <li>4. Credit Card</li>
                                        </ul>
                                    </div>
                                    <div class="col-6 doc-list-item">
                                        <p class="subsection-title">For Tourists</p>
                                        <ul style="padding-left:0px !important;">
                                            <li>1. Copy of Passport</li>
                                            <li>2. Copy of Visit Visa</li>
                                            <li>3. US, Canada, EU, GCC or International Driving License</li>
                                            <li>4. Credit Card</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pp-none pl-none pp-sm-none pl-sm-none pp-md-none-right pl-md-none-right">
                            <div id="toast" class="toastclass"></div>
                            <ul class="additional-services">
                                <input type="hidden" class="vat-charge" value="0.05" />
                                <li class="delivery" data-attach="depi" data-email="delivery" data-amount="{{$car->delivery_pickup_charge}}"><img src="{{asset('images/car-out.png')}}" /> <span class="btn-title">Car Delivery</span> <span class="btn-price">AED {{$car->delivery_pickup_charge}}</span></li>

                                <li class="pickup" data-attach="depi" data-email="pickup" data-amount="{{$car->delivery_pickup_charge}}"><img src="{{asset('images/car-in-e1516019598518.png')}}" /> <span class="btn-title">Car Pickup</span> <span class="btn-price">AED {{$car->delivery_pickup_charge}}</span></li>

                                <li class="cdw" data-attach="addons" data-email="cdw" data-amount="250"><img src="{{asset('images/cdw.png')}}"> <span class="btn-title">Super CDW</span> <span class="btn-price">AED 250</span></li>
                                <li class="driver" data-attach="addons" data-email="driver" data-amount="120"><img src="{{asset('images/driver.png')}}"> <span class="btn-title">Additional Driver</span> <span class="btn-price">AED 120</span></li>                            </ul>
                            <ul class="list-info">
                                <li><span class="highlighted-text">1. Booking agent will contact for documents after completion of payment.</span></li>
                                <li><span class="highlighted-text">2. Delivery and collection of vehicle is free. Rental company will contact to get the delivery address after booking confirmation.</span></li>
                                <li class="cdw-message hidden"><span class="highlighted-text">3. Customer will have zero liability in case of an accidental as CDW is selected.</span></li>
                            </ul>
                            <h2 class="subsection-title">Rental Breakdown</h2>
                            <table class="price-table">
                                <tr>
                                    <td>Sub Total</td>
                                    <td class="td-booking-rent"><span>{{$car->monthly_rent}}</span> AED</td>
                                </tr>
                                <tr>
                                    <td>Delivery/Pickup</td>
                                    <td class="td-depi"><span>0</span> AED</td>
                                </tr>
                                <tr>
                                    <td>Add-ons</td>
                                    <td class="td-addons"><span>0</span> AED</td>
                                </tr>
                                <tr>
                                    <td>VAT (5%)</td>
                                    <td class="td-vat"><span>{{$car->monthly_rent*0.05}}</span> AED</td>
                                </tr>
                                <tr>
                                    <td>Total Amount</td>
                                    <td class="td-total-amount"><span>{{$car->monthly_rent*0.05+$car->monthly_rent}}</span> AED</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </section>
                <section class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pp-md-none pl-md-none pp-md-none pl-sm-none">
                    <div class="booking-form-wrapper col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pp-none pl-none pp-md-none pl-md-none pp-md-none pl-sm-none">
                        <h2 class="subsection-title col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Personal Information</h2>
                        <div class="alert alert-danger" style="display: none;" id="er_div">
                            <span id="er_msg" ></span>
                        </div>
                        {!! Form::open(['action' => 'EmailsController@carBooking' , 'method'=>'post' , 'class'=>'booking-form']) !!}
                        <div class="hidden-fields" hidden>
                            <input data-hj-whitelist type="hidden" name="car" value="{{$car->name}} &#8211; Brand New">
                            <input data-hj-whitelist type="hidden" name="action" value="booking_process">
                            <input data-hj-whitelist type="hidden" name="carid" value="{{$car->car_id}}">
                            <input data-hj-whitelist type="hidden" name="company" value="Kohistanrentacar">
                            <input data-hj-whitelist type="hidden" name="duration" value="30 days">
                            <input data-hj-whitelist type="hidden" name="rentalAmount" value="{{$car->monthly_rent}}">
                            <input data-hj-whitelist type="hidden" name="vat" value="{{$car->monthly_rent*0.05}}">
                            <input data-hj-whitelist type="hidden" name="start_date" value="{{$startDate}}">
                            <input data-hj-whitelist type="hidden" name="end_date" value="{{$startDate}}">
                            <input data-hj-whitelist type="hidden" name="delivery_charge" value="{{$car->delivery_pickup_charge}}">
                            <input data-hj-whitelist type="hidden" name="pickup_charge" value="{{$car->delivery_pickup_charge}}">
                            <input data-hj-whitelist type="hidden" name="supercdw_charge" value="250">
                            <input data-hj-whitelist type="hidden" name="additional_driver_charge" value="0">

                            <input data-hj-whitelist type="hidden" name="totalAmount" value="{{$car->monthly_rent*0.05+$car->monthly_rent}}">
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 padding-0">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div class="input-group">
                                        <label for="cc_name">Name</label>
                                        <input data-hj-whitelist type="text" class="form-control" name="name" required />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div class="input-group">
                                        <label for="email">Email</label>
                                        <input data-hj-whitelist type="email" class="form-control" name="email" required />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div class="input-group">
                                        <label for="number">Number</label>
                                        <input data-hj-whitelist type="text" class="form-control" name="number" required id="phone" />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div class="input-group">
                                        <label for="address">Address</label>
                                        <input data-hj-whitelist type="text" class="form-control" name="address" required />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div class="input-group">
                                        <label for="country">City</label>
                                        <input data-hj-whitelist type="text" class="form-control" name="city" value="Dubai" required />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div class="input-group">
                                        <label for="country">Country</label>
                                        <input data-hj-whitelist type="text" class="form-control" name="country" value="United Arab Emirates" required />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div class="input-group">
                                        <!--                                    <p class="highlighted-text text-stop-booking">Online booking of this vehicle on Monthly basis is not available</p>-->
                                        <input data-hj-whitelist type="submit" name="book_now" id="book_now" class="btn btn-blue" value="Book Now" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </section>

@endsection
