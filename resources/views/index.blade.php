@extends('layouts.header')

@section('content')

    <style>
        @media only screen and (min-width: 768px) {
            .search-form {
                background-image: none !important;
                background: #f6f6f600;
            }
            label{
                color: #004568;
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

    
    @if (Session::has('message'))
        <script>
            toastr.success('Success' , '{!! session('message') !!}');
        </script>
    @endif

    <section class="home-header-section" style="background: url({{asset('public/images/banner12.webp')}});">
        <div class="container padding-0 forms-container">
            <p class="main-heading" style="color:#0089D0">Best rent a car deals from top brands in UAE</p>
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
        <div class=""></div>
    </section>

    <form hidden>
        <button type="button" id="car_section"></button>
    </form>

    <script>

        var ser  = "";
        var csrf = "{{ csrf_token() }}";
        ser      = ser + '&crsf=' +csrf + '&is_ajax=' + true;

        setTimeout(function(){

            $.ajax({
                url: '{{route('home_ajax')}}',
                type: 'POST',
                dataType: 'json',
                headers: {
                    'X-CSRF-TOKEN': csrf,
                },
                data: ser,
                success: function (data) {
                    $('.home-cars-section').html(data.html);
                },
                error: function (data) {
                    console.log(data);
                },
            });

        }, 1000);

    </script>


@endsection
