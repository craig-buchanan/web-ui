use strict;
use warnings;

use lib 'lib';

use Mojolicious::Lite;

get '/' => 'index';

get '/inputs' => sub {
  my $self = shift;
   
  $self->render(json => [
    {
      class   => 'TestClass',
      field   => 'input1',
      context => '',
      value   => "test1", 
    },
    {
      class   => 'TestClass',
      field   => 'input2',
      context => '',
      value   => "test2", 
    },
  ]);
};


app->start(@ARGV);

