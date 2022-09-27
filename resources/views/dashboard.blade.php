@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                    <a class="btn btn-primary" href="{{url('posts/create')}}">Creat New Post</a>
                </div>
                @if(count($posts)>0)
                <table class="table table-stripped">
                    <tr>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                    @foreach($posts as $post)
                    <tr>
                        <td>{{$post->title}}</td>
                        <td><a href="{{url('posts/'. $post->id .'/edit' )}}">Edit</a></td>                       
                    </tr>
                    @endforeach
                </table>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection
