@extends('layouts.header')

@section('content')

    <section>
        <h1 class="absolute-hidden" style="position: absolute;overflow: hidden;height: 0rem;width: 0rem;opacity: 0;font-size: 0rem;margin: 0rem;padding: 0rem;">Cars List</h1>
        <div class="container padding-0 main-container">
            <div class="row">
                <aside class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 pl-xl-none pp-md-none pl-md-none pp-sm-none pl-sm-none">
                    <div class="fixme" id="asidediv" data-scroll="true">
                        <form class="search-form" method="POST" action="{{route('carlist_search')}}" enctype="multipart/form-data" style="background-image: url(https://kohistanrentacar.com/images/banner.jpg);">
                            @csrf
                            <input type="hidden" name="allcars" value="1" id="all_cars">
                            <input type="hidden" name="dealofmonth" value="0" id="monthly_deal">
                            <input type="hidden" name="dealofday" value="0"  id="deal_of_day">
                            <input type="hidden" name="cheapestcar" value="0" id="cheapest">
                            <input type="hidden" name="car_lease" value="0" id="car_lease">
                            <input type="hidden" name="category_id" value="0" id="category_id">
                            <input type="hidden" name="brands" value="0" id="brands">
                            <input type="hidden" name="on_load" value="0" id="on_load">
                            <input type="hidden" name="search" value="{{!empty($search)? $search : '' }}" id="on_load">

                            <div class="row">
                                <div class="form-group col-6 col-sm-6 col-md-3 col-lg-3 col-xl-6 pl-xl-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                                    <label for="category">Category</label>
                                    <div class="dropdown-list-container">
                                        <select data-hj-whitelist class="form-control" id="category_list" name="category" readonly>
                                            <option class="active" value="0">All Cars</option>
                                            @foreach($categories as $category)
                                                <option {{(isset($car_category) && $car_category == $category->category_id ? 'selected' : '')}} value="{{$category->category_id}}">{{$category->name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-6 col-md-3 col-lg-3 col-xl-6 pl-xl-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                                    <label for="locations">Locations</label>
                                    <div class="dropdown-list-container">
                                        <select data-hj-whitelist type="text" class="form-control" id="locations_list" name="locations"  readonly>
                                            <option value="dubai" {{(isset($locations) && $locations=='dubai' ? 'selected' : '')}}>dubai</option>
                                            <option value="sharjah" {{(isset($locations) && $locations=='sharjah' ? 'selected' : '')}}>sharjah</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-6 col-md-3 col-lg-3 col-xl-6 pl-xl-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                                    <label for="startDate">Start Date</label>
                                    <div class="input-with-icon-container">
                                        <input data-hj-whitelist type="text" class="form-control datepicker" id="startDate" name="startDate" value="{{(isset($startDate) && $startDate ? $startDate : date("d/m/Y"))}}" min=date("d/m/Y") readonly />
                                        <i class="far fa-calendar-alt"></i>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-6 col-md-3 col-lg-3 col-xl-6 pl-xl-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                                    <label for="endDate">End Date</label>
                                    <div class="input-with-icon-container">
                                        <input data-hj-whitelist type="text" class="form-control datepicker" id="endDate" name="endDate" value="{{(isset($endDate) && $endDate ? $endDate : date('d/m/Y' , strtotime("+1 month")))}}" readonly />
                                        <i class="far fa-calendar-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <small class="form-text" style="display: none; color: red;" id="date_err"></small>

                            <div class="row">
                                <!-- addded after price filter removal -->
                                <input type="text" class="form-control"  name="filter_minPrice " value="60 " autocomplete="off " hidden/>
                                <input type="text " class="form-control " name="filter_maxPrice" value="7000" autocomplete="off" hidden/>
                                <!-- addded after price filter removal end-->
                                <div class="form-group col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 pp-xl-none pl-xl-none pp-lg-none pl-lg-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none p-0" hidden>
                                    <ul class="filter-list padding-0">
                                        <li data-filter="bname" data-bname="8">Chevrolet</li>
                                        <li data-filter="bname" data-bname="6">Nissan</li>
                                        <li data-filter="bname" data-bname="5">Kia</li>
                                        <li data-filter="bname" data-bname="4">Hyundai</li>
                                    </ul>
                                </div>
                            </div>

                            <button type="button" id="search_submit" class="btn btn-blue filter">Search</button>
                        </form>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pp-xl-none pl-xl-none pp-lg-none pl-lg-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none d-none d-sm-none d-md-none d-lg-none d-xl-block p-0">
                            <div class="filter-title">Filters</div>
                            <div class="filter-row">

                                <div class="form-group col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 pp-xl-none pl-xl-none pp-lg-none pl-lg-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none p-0">
                                    <ul class="filter-list padding-0">
                                        @foreach($brands as $brand)
                                            <li class="brand_filter" data-name="brands" data-id="{{$brand->brand_id}}">{{$brand->name}}</li>
                                        @endforeach
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </aside>
                <section class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 pp-md-none pl-md-none pp-md-none pl-sm-none">
                    <div class="btn-filter-row">
                        <ul class="btn-filter-wrapper padding-0">
                            <li class="active btn-filter pp-none pl-none pp-sm-none pl-sm-none pp-md-none pl-md-none pp-lg-none pl-lg-none pp-xl-none pl-xl-none">
                                <button class="btn btn-blue filter" id="all_cars" value="1" data-name="all_cars">
                                    <p>All Cars</p>
                                </button>
                            </li>
                            <li class="btn-filter pp-none pl-none pp-sm-none pl-sm-none pp-md-none pl-md-none pp-lg-none pl-lg-none pp-xl-none pl-xl-none">
                                <button class="btn btn-blue filter"  value="1" data-name="monthly_deal" id="monthly_deal">
                                    <p>Monthly Deals</p>
                                </button>
                            </li>
                            <li class="btn-filter pp-none pl-none pp-sm-none pl-sm-none pp-md-none pl-md-none pp-lg-none pl-lg-none pp-xl-none pl-xl-none">
                                <button class="btn btn-blue filter" id="deal_of_day" data-name="deal_of_day" value="1">
                                    <p>Deal of Day</p>
                                </button>
                            </li>
                            <li class="btn-filter pp-none pl-none pp-sm-none pl-sm-none pp-md-none pl-md-none pp-lg-none pl-lg-none pp-xl-none pl-xl-none">
                                <button class="btn btn-blue filter" id="cheapest" value="1" data-name="cheapest">
                                    <p>Cheapest</p>
                                </button>
                            </li>
                            <li class="btn-filter pp-none pl-none pp-sm-none pl-sm-none pp-md-none pl-md-none pp-lg-none pl-lg-none pp-xl-none pl-xl-none">
                                <button class="btn btn-blue filter" value="1" data-name="car_lease" id="car_lease">
                                    <p>Car Lease</p>
                                </button>
                            </li>
                            @foreach($categories as $category)
                                <li class="btn-filter pp-none pl-none pp-sm-none pl-sm-none pp-md-none pl-md-none pp-lg-none pl-lg-none pp-xl-none pl-xl-none">
                                    <button class="btn btn-blue filter" value="{{$category->category_id}}" data-name="category_id" id="hatchback">
                                        <p>{{$category->name}}</p>
                                    </button>
                                </li>
                            @endforeach

                        </ul>
                    </div>

                    <div id="cars_section">
                        <div class="loader_"></div>
                    </div>

                </section>
            </div>
        </div>
        <button class="backtotop"><i class="fas fa-arrow-up"></i></button>
        <div class="mobile-filters">
            <ul class="header">
                <li>Clear all</li>
                <li>Cancel</li>
            </ul>
            <button disabled>Apply filters</button>
            <div class="filter-row">
                <form class="filter-form" method="post">
                    <div class="row">
                        <div class="form-group col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 pp-xl-none pl-xl-none pp-lg-none pl-lg-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                            <label for="price-slider">Price Range</label>
                            <div class="input-with-slide-range">
                                <div class="row">
                                    <div class="col-6 pl-xl-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                                        <label>Min Price</label>
                                        <div class="dropdown-list-container">
                                            <input data-hj-whitelist type="text" class="form-control" id="category" name="category" value="0 AED" readonly="">
                                            <i class="fas fa-angle-down"></i>
                                            <ul>
                                                <li class="active">0 AED</li>
                                                <li>500 AED</li>
                                                <li>1000 AED</li>
                                                <li>1500 AED</li>
                                                <li>2000 AED</li>
                                                <li>2500 AED</li>
                                                <li>3000 AED</li>
                                                <li>3500 AED</li>
                                                <li>4000 AED</li>
                                                <li>4500 AED</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-6 pl-xl-none pp-md-none pl-md-none pp-sm-none pl-sm-none pp-none pl-none">
                                        <label>Max Price</label>
                                        <div class="dropdown-list-container">
                                            <input data-hj-whitelist type="text" class="form-control" id="category" name="category" value="10000 AED" readonly="">
                                            <i class="fas fa-angle-down"></i>
                                            <ul>
                                                <li class="active">1000 AED</li>
                                                <li>2000 AED</li>
                                                <li>3000 AED</li>
                                                <li>4000 AED</li>
                                                <li>5000 AED</li>
                                                <li>6000 AED</li>
                                                <li>7000 AED</li>
                                                <li>8000 AED</li>
                                                <li>9000 AED</li>
                                                <li>10000 AED</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label for="filter-list">Select Brands</label>
                            <ul class="filter-list padding-0">
                                <li data-bname="kia">Kia</li>
                                <li data-bname="hyundai">Hyundai</li>
                                <li data-bname="honda">Honda</li>
                                <li data-bname="nissan">Nissan</li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <script type="text/javascript" async>

        let brands = [];
        //$('.filter').click(function () {
        //$('.filter').on('click',function(e){
        $(document).on('click', '.filter',  function(e) {
            let name = $(this).data('name');
            $('#' + name).val($(this).val());

            $('#search_submit').trigger( "click" );

            $('#' + name).val(0);

        });

        //$('.brand_filter').click(function () {
        //$('.brand_filter').on('click',function(e){
        $(document).on('click', '.brand_filter',  function(e) {
            let name  = $(this).data('name');
            let value = $(this).data('id');

            if(jQuery.inArray(value, brands) != -1)
            {
                brands.splice($.inArray(value, brands), 1);
            }
            else
            {
                brands.push(value);
            }
            console.log(brands);
            $('#' + name).val(JSON.stringify(brands));

            $(this).toggleClass( "active" );

            $('#search_submit').trigger( "click" );
        });

        setTimeout(function(){
            $('#on_load').val(1);
            $('#search_submit').trigger( "click" );
            //$('.search-form').trigger( "submit" );
            $('#on_load').val(0);
        }, 2000);

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        //$("body").on("submit", ".search-form", function(e){
        //$('#search_submit').on('click',function(e){
        $(document).on('click', '#search_submit',  function(e) {
            e.preventDefault();
            //var ser = $(this).serialize();
            var ser = $('.search-form').serialize();
            var csrf = "{{ csrf_token() }}";
            ser = ser + '&crsf=' +csrf + '&is_ajax=' + true;
            $.ajax({
                url: '{{route('carlist_search')}}',
                type: 'POST',
                dataType: 'json',
                data: ser,
                success: function (data) {
                    $('#cars_section').html(data.html);
                },
                error: function (data) {
                    console.log(data);
                },
            });
        });
    </script>
@endsection
