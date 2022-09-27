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
            <h5 class="card-title">Add new Brand</h5>
            <div class="header-elements">
                <div class="list-icons">
                    <a class="list-icons-item" data-action="collapse"></a>
                    <a class="list-icons-item" data-action="reload"></a>
                    <a class="list-icons-item" data-action="remove"></a>
                </div>
            </div>
        </div>

        <div class="card-body">

            {!! Form::open(['action' => 'admin\CategoriesController@store' , 'method'=>'post' , 'enctype'=>'multipart/form-data']) !!}
                <div class="row">
                    <div class="col-md-12">
                        <fieldset>
                            <legend class="font-weight-semibold"><i class="icon-reading mr-2"></i> Category details</legend>
                            <div class="row">

                                <div class="offset-md-2 col-md-8">
                                    <div class="form-group">
                                        <label>Name:</label>
                                        <input type="text" name="name" class="form-control" placeholder="enter title">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="offset-md-2 col-md-4">
                                    <div class="form-group">
                                        <label>Attach File:</label>
                                        <input type="file" name="file" id="file" onchange="readURL(this);" class="form-input-styled" data-fouc>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <img src="" id="profile-img-tag" style="width:100px; height: auto;" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="offset-md-2 col-md-8">
                                    <div class="form-group">
                                        <label>Description:</label>
                                        <textarea rows="5" cols="5" name="description" class="form-control summernote" placeholder="Enter brand description here"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="offset-md-2 col-md-8">
                                    <div class="form-group">
                                        <label>Is Enabled:</label>
                                        <select data-placeholder="Select Brand" name="is_enabled" class="form-control form-control-select2" data-fouc>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
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
            </form>

        </div>
    </div>

    <script type="text/javascript">
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#profile-img-tag').attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

    </script>

@endsection()
