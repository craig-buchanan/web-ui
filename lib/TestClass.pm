package TestClass;

use Moose;
use MooseX::Storage;

has [qw(input1 input2 input3)] => (is => 'ro', isa => 'Str', required => 1);


__PACKAGE__->meta->make_immutable;