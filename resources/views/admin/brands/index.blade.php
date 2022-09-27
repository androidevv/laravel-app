@extends('admin.layouts.app')

@section('content')
    <script src="{{ asset('js/datatables.min.js') }}" defer></script>
    <script src="{{ asset('js/datatables_advanced.js') }}" defer></script>


    <div class="card">
        <div class="card-header header-elements-inline">
            <h5 class="card-title">brands</h5>
            <div class="header-elements">
                <div class="list-icons">
                    <a class="btn btn-primary" href="{{url('admin/brands/create')}}">Add New</a>
                    <a class="list-icons-item" data-action="collapse"></a>
                    <a class="list-icons-item" data-action="reload"></a>
                    <a class="list-icons-item" data-action="remove"></a>
                </div>
            </div>
        </div>

        <div class="card-body">

            @if(count($brands)>0)
                <table class="table datatable-show-all">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Enabled</th>
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    @foreach($brands as $brand)
                        <tr>
                            <td><img style="width: 80px; height: auto;" src="{{url('storage/app/brand/' .$brand->file)}}" alt=""></td>
                            <td><a href="{{ url('brands/' . $brand->brand_id) }}" >{{$brand->name}}</a></td>
                            <td><span class="badge badge-success">yes</span></td>
                            <td class="text-center">
                                <div class="list-icons">
                                    <div class="dropdown">
                                        <a href="#" class="list-icons-item" data-toggle="dropdown">
                                            <i class="icon-menu9"></i>
                                        </a>

                                        <div class="dropdown-menu dropdown-menu-right">

                                            <a href="{{ url('admin/brands/' . $brand->brand_id . '/edit') }}" class="dropdown-item"><i class="icon-file-pdf"></i> Edit</a>

                                            {!! Form::open(['action' => ['admin\BrandsController@destroy',$brand->brand_id] , 'method'=>'POST']) !!}
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
                <p>NO brand found</p>
            @endif
        </div>
    </div>
@endsection()
