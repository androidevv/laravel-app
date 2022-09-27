@extends('layouts.app')

@section('content')

	<h3>New post</h3>

	{!! Form::open(['action' => 'PostsController@store' , 'method'=>'post']) !!}
    <div class="form-group">
    	{{ Form::label('title' , 'Title' ,['class' => 'awesome' ]) }}
    	{{ Form::text('title' ,'', ['class'=> 'form-control','placeholder'=>'title']) }}
    </div>
    <div class="form-group">
    	{{ Form::label('body', 'Body' , ['class' => 'awesome'])}}
    	{{ Form::textarea('body' ,'', ['id'=>'article-ckeditor' , 'class'=> 'form-control textarea','placeholder'=>'body'])}}
    </div>
    {{ Form::submit('Submit' , ['class'=>'btn btn-primary']) }}


	{!! Form::close() !!}

@endsection()