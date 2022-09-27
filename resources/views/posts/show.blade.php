@extends('layouts.app')

@section('content')
	<h3>{{$post->title}}</h3>  
	<p>{{$post->body}}</p>
	<small>Written on {{$post->created_at}}</small>
	<a href="{{url('posts/' . $post->id. '/Edit') }}" class="btn btn-primary">Edit</a>
	{!! Form::open(['action' => ['PostsController@destroy', $post->id] , 'method'=>'POST' , 'class'=>'pull-right']) !!}

	{{ Form::hidden('_method' , 'DELETE')}}
	{{ Form::submit('Delete' , ['class'=>'btn btn-danger']) }}
	{!! Form::close() !!}
@endsection()