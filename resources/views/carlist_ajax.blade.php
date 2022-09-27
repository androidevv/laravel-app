<p style="color:#0089d0;" id="date_msg" class="highlighted-text"><i class="far fa-question-circle"></i> You are seeing All Cars available in UAE from {{(isset($startDate) && $startDate ? $startDate : date("d/m/Y"))}} to {{(isset($endDate) && $endDate ? $endDate : date("d/m/Y" , strtotime("+1 month")))}}</p>
<div class="item-list-main" id="allcars_parent">
    <div class="row" id="allcars">

        @if(count($cars)>0)
            <?php
            $start_date = strtotime(str_replace('/', '-', $startDate));
            $end_date   = strtotime(str_replace('/', '-', $endDate));

            $diff = abs($end_date - $start_date);

            $days = $diff/86400;
            $days = ($days == 0)? 1 : $days;
            ?>

            @foreach($cars as $car)
                <?php
                    if($days < 7)
                    {
                        $rent = $car->daily_rent * $days;
                    }
                    else if($days > 6 && $days < 30){
                        $rent = round($car->weekly_rent / 7 *$days);
                    }
                    else if($days > 29)
                    {
                        $rent = round($car->monthly_rent / 30*$days);
                    }
                ?>
                <div class="col-12 col-bsm-6 col-sm-6 col-md-12 col-lg-12 col-lg-12 padding-0 item-wrapper">
                    <div class="item-container items-count-unique  {{($car->is_featured == 1)? 'featured': '' }} ">
                        @if($car->is_featured == 1)<span class="banner"><i class="fas fa-star"></i> Featured</span>@endif

                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 item-img-container d-none d-sm-none d-md-block d-lg-block d-xl-block">
                                <a href="{{url('/cardetail/' . $car->car_id)}}" class="2308">
                                    <img src="{{url('storage/app/car/' .$car->file)}}" width="300" height="163" class="img-fluid" alt="{{$car->brand_name . ' ' . $car->name}}" title="{{$car->brand_name . ' ' . $car->name}}" />
                                </a>
                            </div>
                            <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 detail-container">
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 pp-none pl-none pp-sm-none pl-sm-none">
                                        <p class="item-title"><a href="{{url('/cardetail/' . $car->car_id)}}">{{$car->brand_name . ' ' . $car->name}}</a></p>
                                        <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block item-category">
                                            {{$car->category_name}}
                                            <ul id="star17"><i class="fas fa-star" aria-hidden="true"></i><i class="fas fa-star" aria-hidden="true"></i><i class="fas fa-star" aria-hidden="true"></i><i class="fas fa-star" aria-hidden="true"></i><i class="fas fa-star" aria-hidden="true"></i></ul>
                                            <span class="rating">5</span>
                                            <script>

                                            </script>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 pp-none pl-none pp-sm-none pl-sm-none">
                                        <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none p-relative img-secondary-wrapper">
                                            <img src="{{url('storage/app/car/' .$car->file)}}" class="img-secondary img-fluid" alt="{{$car->brand_name . ' ' . $car->name}}" title="{{$car->brand_name . ' ' . $car->name}}" />
                                        </div>
                                        <div class="row">
                                            <ul class="item-options col-6 col-sm-6 col-md-12">
                                                @if($car->free_cancellation==1)  <li><i class="fas fa-caret-right"></i>Free Cancellation</li> @endif
                                                @if($car->bluetooth==1)  <li><i class="fas fa-caret-right"></i>Bluetooth</li> @endif
                                                @if($car->free_delivery==1)  <li><i class="fas fa-caret-right"></i>Free Delivery</li> @endif
                                                @if($car->comprehensive_insurance==1)  <li><i class="fas fa-caret-right"></i>Comprehensive Insurance</li> @endif

                                                <li><i class="fas fa-caret-right"></i>{{$car->milage}} Km</li>
                                                <li><i class="fas fa-caret-right"></i>Deposit: {{$car->deposit}}</li>
                                                <li><i class="fas fa-caret-right"></i>Excess Insurance Claim: {{$car->excess_claim}}</li>
                                                @if($car->senitized==1) <li style="color: #027baf;font-size: 90%;"><i class="fas fa-check"></i> <b>100% Sanitized</b></li> @endif
                                            </ul>
                                            <div class="col-6 col-sm-6 col-md-12 pp-none pl-none pp-sm-none pl-sm-none d-block d-sm-block d-md-none d-lg-none d-xl-none">
                                                <ul class="price-list">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pp-md-none pl-md-none d-none d-sm-none d-md-block d-lg-block d-xl-block">
                                        <ul class="price-list">
                                            @if($on_load == 1):
                                            <li><a href="">{{$car->monthly_rent}} AED <small>/ Monthly</small></a></li>
                                            <li><a href="">{{$car->weekly_rent}} AED <small>/ Weekly</small></a></li>
                                            <li><a href="">{{$car->daily_rent}} AED <small>/ Daily</small></a></li>
                                            @else:
                                            <li><a href="">{{$rent}} AED <small>/ {{$days}} days</small></a></li>
                                            @endif;
                                        </ul>
                                    </div>
                                    <div class="col-md-12 book-button">
                                        <ul class="item-button-list">
                                            @if($on_load == 1)

                                            <li>
                                                {!! Form::open(['action' => 'Home@checkout' , 'method'=>'post' ]) !!}
                                                <input type="hidden" name="car_id" value="{{$car->car_id}}">
                                                <input type="hidden" name="rent" value="{{$car->monthly_rent}}">
                                                <input type="hidden" name="days" value="30">
                                                <input type="hidden" name="startDate" value="{{(isset($startDate) && $startDate ? $startDate : date("d/m/Y"))}}">
                                                <input type="hidden" name="endDate" value="{{(isset($endDate) && $endDate ? $endDate : date('d/m/Y' , strtotime("+1 month")))}}">
                                                <button class="btn btn-blue " type="submit">Book Now <br />
                                                    {{$car->monthly_rent}} / Month</button>
                                                </form>
                                            </li>
                                            <li>
                                                <a href="{{url('/cardetail/' . $car->car_id)}}" class="btn btn-blue btn-carlist-lh">View Details</a>
                                            </li>
                                            <li><a href="javascript:void(0)" data-toggle="modal" data-target="#inquiry" data-monthly="1400" data-weekly="500" data-daily="80" data-carid="17" data-car="Kia Pegas 2020 (Brand New / 0 KM Operated)" data-type="Sedan" data-company="RentFlex Rent a Car" data-date1="23/03/2020" data-date2="23/04/2020" data-duration="30" data-amount="1400" class="btn btn-blue inquiry btn-carlist-lh">Send Inquiry</a></li>

                                            @else

                                            <li>
                                                {!! Form::open(['action' => 'Home@checkout' , 'method'=>'post' ]) !!}
                                                <input type="hidden" name="car_id" value="{{$car->car_id}}">
                                                <input type="hidden" name="rent" value="{{$rent}}">
                                                <input type="hidden" name="days" value="{{$days}}">
                                                <input type="hidden" name="startDate" value="{{(isset($startDate) && $startDate ? $startDate : date("d/m/Y"))}}">
                                                <input type="hidden" name="endDate" value="{{(isset($endDate) && $endDate ? $endDate : date('d/m/Y' , strtotime("+1 month")))}}">
                                                <button class="btn btn-blue " type="submit">Book Now
                                                    <br />
                                                    {{$rent}} / {{$days}} days</button>
                                                </form>
                                            </li>
                                            <li>
                                                {!! Form::open(['action' => 'Home@car_detail' , 'method'=>'post' ]) !!}
                                                <input type="hidden" name="car_id" value="{{$car->car_id}}">
                                                <input type="hidden" name="rent" value="{{$rent}}">
                                                <input type="hidden" name="days" value="{{$days}}">
                                                <input type="hidden" name="startDate" value="{{(isset($startDate) && $startDate ? $startDate : date("d/m/Y"))}}">
                                                <input type="hidden" name="endDate" value="{{(isset($endDate) && $endDate ? $endDate : date('d/m/Y' , strtotime("+1 month")))}}">
                                                <button type="submit"  class="btn btn-blue btn-carlist-lh">View Details</button>
                                                </form>
                                            </li>
                                            <li><a href="javascript:void(0)" data-toggle="modal" data-target="#inquiry" data-monthly="{{$car->monthly_rent}}" data-weekly="{{$car->weekly_rent}}" data-daily="{{$car->daily_rent}}" data-carid="{{$car->car_id}}" data-car="{{$car->name}}" data-type="{{$car->category_name}}" data-company="{{$car->brand_name}}" data-date1="{{(isset($startDate) && $startDate ? $startDate : date("d/m/Y"))}}" data-date2="{{(isset($endDate) && $endDate ? $endDate : date('d/m/Y' , strtotime("+1 month")))}}" data-duration="{{$days}}" data-amount="{{$rent}}" class="btn btn-blue inquiry btn-carlist-lh">Send Inquiry</a></li>

                                            @endif


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            @endforeach
        @else
        <h5>No search results found</h5>
        @endif

    </div>
</div>
