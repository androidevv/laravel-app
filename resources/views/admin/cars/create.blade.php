@extends('admin.layouts.app')

@section('content')
    <script src="{{ asset('js/uniform.min.js') }}" defer></script>
    <script src="{{ asset('js/select2.min.js') }}" defer></script>
    <script src="{{ asset('js/form_layouts.js') }}" defer></script>
    <script src="{{ asset('js/switch.min.js') }}" defer></script>
    <script src="{{ asset('js/form_checkboxes_radios.js') }}" defer></script>
    <script src="{{ asset('js/summernote.min.js') }}" defer></script>
    <script src="{{ asset('js/editor_summernote.js') }}" defer></script>
    <script src="{{ asset('js/tagsinput.min.js') }}" defer></script>
    <script src="{{ asset('js/form_tags_input.js') }}" defer></script>

    <div class="card">
        <div class="card-header header-elements-inline">
            <h5 class="card-title">Add new Car</h5>
            <div class="header-elements">
                <div class="list-icons">
                    <a class="list-icons-item" data-action="collapse"></a>
                    <a class="list-icons-item" data-action="reload"></a>
                    <a class="list-icons-item" data-action="remove"></a>
                </div>
            </div>
        </div>

        <div class="card-body">

            {!! Form::open(['action' => 'admin\CarsController@store' , 'method'=>'post' , 'enctype'=>'multipart/form-data']) !!}
                <div class="row">
                    <div class="col-md-12">
                        <fieldset>
                            <legend class="font-weight-semibold"><i class="icon-reading mr-2"></i> Car details</legend>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Brand:</label>
                                        <select data-placeholder="Select Brand" name="brand_id" class="form-control form-control-select2" data-fouc>
                                            @foreach($brands as $brand)
                                                <option value="{{$brand->brand_id}}">{{$brand->name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Name:</label>
                                        <input type="text" name="name" class="form-control" placeholder="enter title">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Category:</label>
                                        <select data-placeholder="Select Category" name="category_id" class="form-control form-control-select2" data-fouc>
                                            @foreach($categories as $category)
                                            <option value="{{$category->category_id}}">{{$category->name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Milage</label>
                                        <input type="number" name="milage" class="form-control" placeholder="Milage">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Excess Insuracne Claim:</label>
                                        <input type="number" name="excess_claim" class="form-control" placeholder="Milage">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Deposit</label>
                                        <input type="number" name="deposit" class="form-control" placeholder="Deposit">
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                            <input type="checkbox" name="bluetooth" value="1" class="form-check-input-styled"  data-fouc>
                                            Bluetooth
                                        </label>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                            <input type="checkbox" name="free_delivery" value="1" class="form-check-input-styled"  data-fouc>
                                            Free Delivery and Pickup
                                        </label>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                            <input type="checkbox" name="fee_cancellation" value="1" class="form-check-input-styled"  data-fouc>
                                            Free Cancellation
                                        </label>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                            <input type="checkbox" name="comprehensive_insurance" value="1" class="form-check-input-styled"  data-fouc>
                                            Comprehensive Insurance Included
                                        </label>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="col-md-3">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                            <input type="checkbox" name="camera" value="1" class="form-check-input-styled"  data-fouc>
                                            Camera
                                        </label>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                            <input type="checkbox" name="navigation" value="1" class="form-check-input-styled"  data-fouc>
                                            Navigation
                                        </label>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                            <input type="checkbox" name="cruise_control" value="1" class="form-check-input-styled"  data-fouc>
                                            Cruise Control
                                        </label>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                            <input type="checkbox" name="parking_sensor" value="1" class="form-check-input-styled"  data-fouc>
                                            Parking Sensor
                                        </label>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                            <input type="checkbox" name="senitized" value="1" class="form-check-input-styled"  data-fouc>
                                            Senitized
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Daily Rent:</label>
                                        <input type="number" class="form-control" name="daily_rent"  placeholder="Milage">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Weekly Rent:</label>
                                        <input type="number" class="form-control" name="weekly_rent" placeholder="Milage">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Monthly Rent:</label>
                                        <input type="number" class="form-control" name="monthly_rent" placeholder="Milage">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Attach File:</label>
                                        <input type="file" name="file" id="file" onchange="readURL(this);" class="form-input-styled" data-fouc>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <img src="" id="profile-img-tag" style="width:100px; height: auto;" />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Description:</label>
                                <textarea rows="5" cols="5" class="form-control summernote" name="description" placeholder="Enter car description here"></textarea>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="meta_title">Meta Title:</label>
                                        <input type="text" name="meta_title" id="meta_title" placeholder="Meta Title" class="form-control" >
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="slug">Slug:</label>
                                        <input type="text" name="slug" id="slug" placeholder="Slug" class="form-control" >
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="meta_keywords">Meta keywords:</label>
                                        <input type="text" name="meta_keywords" placeholder="Meta keywords" id="meta_keywords" class="form-control tokenfield" value="These,are,tokens" data-fouc" >
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="meta_description">Meta Description:</label>
                                        <textarea rows="5" cols="5" class="form-control summernote" name="meta_description" placeholder="Enter car meta description here"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
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
