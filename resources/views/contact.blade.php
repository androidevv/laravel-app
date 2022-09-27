@extends('layouts.header')

@section('content')
    <section class="contact-banner" style="background: url({{asset('images/ban-contact.jpg')}});">
    </section>
    <section class="contact-page-section">
        <div class="container padding-0">
            <div class="row">
                <section class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pp-xl-none pl-xl-none pp-lg-none pl-lg-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                    <div class="contact-form-wrapper">
                        <h1>Contact Us</h1>
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 contact-form-container d-flex">
                                {!! Form::open(['action' => 'EmailsController@contactUsForm' , 'method'=>'post' , 'class'=>'form-tag']) !!}
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="name" value="" placeholder="Name *" required>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="phone" id="phone" placeholder="Phone Number *" value="" required>
                                        <input type="hidden" name="full_phone" id="full_phone" value="">
                                        <input type="hidden" name="country_code" id="country_code" value="">
                                    </div>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile" name="booking_attachment">
                                        <label class="custom-file-label" for="customFile">Attachment (If Any)</label>
                                    </div>
                                    <div class="form-group">
                                        <textarea required class="form-control" rows="5" id="message" name="message" placeholder="Your Message *"></textarea>
                                    </div>
                                    <div class="g-recaptcha" data-sitekey="6LcbHnoUAAAAAPJhLRHPX9TQCDllaagehzarUnnU"></div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-blue" name="submit">Send</button>
                                    </div>
                                </form>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 contact-text-container">
                                <div class="contact-text">
                                    <div class="media align-items-center">
                                        <img class="align-self-center mr-3" src="{{asset('images/location.png')}}" alt="location">
                                        <div class="media-body">
                                            <p>M 03 Ithraa Plaza Garhod. <br>P.O.Box: 36231 DUBAI UAE</p>
                                        </div>
                                    </div>
                                    <div class="media align-items-center">
                                        <img class="align-self-center mr-3" src="{{asset('images/telephone.png')}}" alt="telephone">
                                        <div class="media-body">
                                            <p><a href="tel:97142735735"> +97142735735</a></p>
                                            <p><a href="tel:971 55 7865406"> +971 55 7865406 </a></p>
                                        </div>
                                    </div>
                                    <div class="media align-items-center">
                                        <img class="align-self-center mr-3" src="{{asset('images/mail.png')}}" alt="mail">
                                        <div class="media-body">
                                            <p><a href="mailto:info@kohistanrentacar.com">info@kohistanrentacar.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="contact-map-wrapper">
                                    <h4>Our Location</h4>
                                    <div class="row">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pp-xl-none pl-xl-none pp-lg-none pl-lg-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none maps-wrapper">
                                            <div class="row">
                                                <div class="col-12 col-sm-12 col-md-12 item-map-wrapper">
                                                    <div class="map-container">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7217.597898698063!2d55.33951!3d25.2436958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8bdd3c9892223a44!2sKohistan+Rent+A+Car+LLC!5e0!3m2!1sen!2sin!4v1547008280089" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
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
    </section>
@endsection
