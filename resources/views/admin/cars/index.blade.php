@extends('admin.layouts.app')

@section('content')
    <script src="{{ asset('js/datatables.min.js') }}" defer></script>
    <script src="{{ asset('js/datatables_advanced.js') }}" defer></script>
    <div class="card">
        <div class="card-header header-elements-inline">
            <h5 class="card-title">Cars</h5>
            <div class="header-elements">
                <div class="list-icons">
                    <a class="btn btn-primary" href="{{url('admin/cars/create')}}">Add New</a>
                    <a class="list-icons-item" data-action="collapse"></a>
                    <a class="list-icons-item" data-action="reload"></a>
                    <a class="list-icons-item" data-action="remove"></a>
                </div>
            </div>
        </div>

        <div class="card-body">

            @if(count($cars)>0)
                <table class="table datatable-show-all">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Daily Rent</th>
                            <th>Weekly Rent</th>
                            <th>Monthly Rent</th>
                            <th>Status</th>
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    @foreach($cars as $car)
                        <tr>
                            <td><img style="width: 100px; height: auto;" src="{{url('storage/app/car/' .$car->file)}}" alt=""></td>
                            <td><a href="{{ url('cars/' . $car->car_id) }}" >{{$car->name}}</a></td>
                            <td>{{$car->daily_rent}}</td>
                            <td>{{$car->weekly_rent}}</td>
                            <td>{{$car->monthly_rent}}</td>
                            <td><span class="badge badge-success">Available</span></td>
                            <td class="text-center">
                                <div class="list-icons">
                                    <div class="dropdown">
                                        <a href="#" class="list-icons-item" data-toggle="dropdown">
                                            <i class="icon-menu9"></i>
                                        </a>

                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a href="{{ url('admin/cars/' . $car->car_id . '/edit') }}" class="dropdown-item"><i class="icon-file-pdf"></i> Edit</a>

                                            {!! Form::open(['action' => ['admin\CarsController@destroy',$car->car_id] , 'method'=>'POST']) !!}
                                            <button type="submit" class="dropdown-item"><i class="icon-file-excel"></i> Delete</button>
                                            {{ Form::hidden('_method' , 'DELETE')}}
                                            {!! Form::close() !!}

                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            @else
                <p>NO car found</p>
            @endif
        </div>
    </div>
@endsection()
