@extends('layouts.app')

@section('content')

	<h3>New post</h3>

	{!! Form::open(['action' => ['PostsController@update' , $post->id] , 'method'=>'POST']) !!}
    <div class="form-group">
    	{{ Form::label('title' , 'Title' ,['class' => 'awesome' ]) }}
    	{{ Form::text('title' ,$post->title, ['class'=> 'form-control','placeholder'=>'title']) }}
    </div>
    <div class="form-group">
    	{{ Form::label('body', 'Body' , ['class' => 'awesome'])}}
    	{{ Form::textarea('body' ,$post->body, ['id'=>'article-ckeditor' , 'class'=> 'form-control textarea','placeholder'=>'body'])}}
    </div>

    {{ Form::hidden('_method','PUT') }}
    {{ Form::submit('Submit' , ['class'=>'btn btn-primary']) }}


	{!! Form::close() !!}

@endsection()