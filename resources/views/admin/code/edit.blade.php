@extends('admin.layouts.app')

@section('content')
    <script src="{{ asset('js/uniform.min.js') }}" defer></script>
    <script src="{{ asset('js/select2.min.js') }}" defer></script>
    <script src="{{ asset('js/form_layouts.js') }}" defer></script>
    <script src="{{ asset('js/switch.min.js') }}" defer></script>
    <script src="{{ asset('js/form_checkboxes_radios.js') }}" defer></script>
    <script src="{{ asset('js/summernote.min.js') }}" defer></script>
    <script src="{{ asset('js/editor_summernote.js') }}" defer></script>

    <div class="card">
        <div class="card-header header-elements-inline">
            <h5 class="card-title">Edit {{$code->name}}</h5>
            <div class="header-elements">
                <div class="list-icons">
                    <a class="list-icons-item" data-action="collapse"></a>
                    <a class="list-icons-item" data-action="reload"></a>
                    <a class="list-icons-item" data-action="remove"></a>
                </div>
            </div>
        </div>

        <div class="card-body">

            {!! Form::open(['action' => ['admin\CustomCodeController@update' , $code->id ] , 'method'=>'POST' , 'enctype'=>'multipart/form-data']) !!}
            <div class="row">
                <div class="col-md-12">
                    <fieldset>
                        <legend class="font-weight-semibold"><i class="icon-reading mr-2"></i> Code details</legend>
                        <div class="row">

                            <div class="offset-md-2 col-md-8">
                                <div class="form-group">
                                    <label>Name:</label>
                                    <input type="text" class="form-control" name="name" value="{{$code->name}}" placeholder="enter Name">
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="offset-md-2 col-md-8">
                                <div class="form-group">
                                    <label>Position:</label>
                                    <select data-placeholder="Select Position" name="position" class="form-control form-control-select2" data-fouc>
                                        @foreach($positions as $position)
                                            <option {{($code->position == $position ? 'selected' : '')}} value="{{$position}}">{{$position}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="offset-md-2 col-md-8">
                                <div class="form-group">
                                    <label for="meta_description">Code:</label>
                                    <textarea rows="5" cols="5" class="form-control summernote" name="code" placeholder="Enter code here">{{$code->code}}</textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="offset-md-2 col-md-8">
                                <div class="form-group">
                                    <label>Is Enabled:</label>
                                    <select data-placeholder="Is Enabled" name="is_enabled" class="form-control form-control-select2" data-fouc>
                                        <option {{($code->is_enabled == 1)? 'selected': ''}} value="1">Yes</option>
                                        <option {{($code->is_enabled == 0)? 'selected': ''}} value="0">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>

            </div>

            <div class="text-right">
                <button type="submit" class="btn btn-primary">Save<i class="icon-paperplane ml-2"></i></button>
            </div>

            {{ Form::hidden('_method','PUT') }}

            </form>

        </div>
    </div>


@endsection()
