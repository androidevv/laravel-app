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
            <h5 class="card-title">Edit {{$seo->name}}</h5>
            <div class="header-elements">
                <div class="list-icons">
                    <a class="list-icons-item" data-action="collapse"></a>
                    <a class="list-icons-item" data-action="reload"></a>
                    <a class="list-icons-item" data-action="remove"></a>
                </div>
            </div>
        </div>

        <div class="card-body">

            {!! Form::open(['action' => ['admin\SeoController@update' , $seo->id ] , 'method'=>'POST' , 'enctype'=>'multipart/form-data']) !!}
            <div class="row">
                <div class="col-md-12">
                    <fieldset>
                        <legend class="font-weight-semibold"><i class="icon-reading mr-2"></i> Seo details</legend>
                        <div class="row">

                            <div class="offset-md-2 col-md-8">
                                <div class="form-group">
                                    <label>Name:</label>
                                    <input type="text" class="form-control" name="name" value="{{$seo->name}}" placeholder="enter Name">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="offset-md-2 col-md-8">
                                <div class="form-group">
                                    <label for="meta_title">Meta Title:</label>
                                    <input type="text" name="meta_title" id="meta_title" placeholder="Meta Title" value="{!! $seo->meta_title !!}" class="form-control" >
                                </div>
                            </div>

                            <div class="offset-md-2 col-md-8">
                                <div class="form-group">
                                    <label>Page:</label>
                                    <select data-placeholder="Select Page" name="page" class="form-control form-control-select2" data-fouc>
                                        @foreach($pages as $page)
                                            <option {{($seo->page == $page ? 'selected' : '')}} value="{{$page}}">{{$page}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="offset-md-2 col-md-8">
                                    <div class="form-group">
                                        <label for="slug">slug:</label>
                                        <input type="text" name="slug" placeholder="Slug" value="{{$seo->slug}}" id="slug" class="form-control" >
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="row">
                            <div class="offset-md-2 col-md-8">
                                <div class="form-group">
                                    <label for="meta_keywords">Meta keywords:</label>
                                    <input type="text" name="meta_keywords" placeholder="Meta keywords" value="{!! $seo->meta_keywords !!}" id="meta_keywords" class="form-control tokenfield"  data-fouc" >
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="offset-md-2 col-md-8">
                                <div class="form-group">
                                    <label for="meta_description">Meta Description:</label>
                                    <textarea rows="5" cols="5" class="form-control" name="meta_description" placeholder="Enter car meta description here">{!! $seo->meta_description !!}</textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="offset-md-2 col-md-8">
                                <div class="form-group">
                                    <label for="meta_description">Article:</label>
                                    <textarea rows="5" cols="5" class="form-control summernote" name="article" placeholder="Enter article here">{!! $seo->article !!}</textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="offset-md-2 col-md-8">
                                <div class="form-group">
                                    <label>Is Enabled:</label>
                                    <select data-placeholder="Is Enabled" name="is_enabled" class="form-control form-control-select2" data-fouc>
                                        <option {{($seo->is_enabled == 1)? 'selected': ''}} value="1">Yes</option>
                                        <option {{($seo->is_enabled == 0)? 'selected': ''}} value="0">No</option>
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
