@extends('admin.layouts.app')

@section('content')
    <script src="{{ asset('js/datatables.min.js') }}" defer></script>
    <script src="{{ asset('js/datatables_advanced.js') }}" defer></script>


    <div class="card">
        <div class="card-header header-elements-inline">
            <h5 class="card-title">Custom Codes</h5>
            <div class="header-elements">
                <div class="list-icons">
                    <a class="btn btn-primary" href="{{url('admin/CustomCodes/create')}}">Add New</a>
                    <a class="list-icons-item" data-action="collapse"></a>
                    <a class="list-icons-item" data-action="reload"></a>
                    <a class="list-icons-item" data-action="remove"></a>
                </div>
            </div>
        </div>

        <div class="card-body">

            @if(count($codes)>0)
                <table class="table datatable-show-all">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Enabled</th>
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    @foreach($codes as $code)
                        <tr>
                            <td><a href="" >{{$code->name}}</a></td>
                            <td><span class="badge badge-success">yes</span></td>
                            <td class="text-center">
                                <div class="list-icons">
                                    <div class="dropdown">
                                        <a href="#" class="list-icons-item" data-toggle="dropdown">
                                            <i class="icon-menu9"></i>
                                        </a>

                                        <div class="dropdown-menu dropdown-menu-right">

                                            <a href="{{ url('admin/CustomCodes/' . $code->id . '/edit') }}" class="dropdown-item"><i class="icon-pen"></i> Edit</a>

                                            {!! Form::open(['action' => ['admin\CustomCodeController@destroy',$code->id] , 'method'=>'POST']) !!}
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
                <p>NO Codes found</p>
            @endif
        </div>
    </div>
@endsection()
