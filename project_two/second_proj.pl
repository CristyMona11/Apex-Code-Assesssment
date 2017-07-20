#!/usr/bin/perl

use DBI;

$dbh = DBI->connect("dbi:SQLite:humans.db") || die "Cannot connect";
  print "$dbh";

$dbh->do("create table human(id integer, first_name text, last_name text, home text)");

$dbh->do("insert into human values(1, 'Rose', 'Tyler', 'Earth')");
$dbh->do("insert into human values(2, 'Zoe', 'Heriot', 'Space Station W3')");
$dbh->do("insert into human values(3, 'Jo', 'Grant', 'Earth')");
$dbh->do("insert into human values(4, 'Leela', 'null', 'Unspecified')");
$dbh->do("insert into human values(5, 'Romana', 'null', 'Gallifrey')");
$dbh->do("insert into human values(6, 'Clara', 'Oswald', 'Earth')");
$dbh->do("insert into human values(7, 'Adric', 'null', 'Alzarius')");
$dbh->do("insert into human values(8, 'Susan', 'Foreman', 'Gallifrey')");

$res = $dbh->selectall_arrayref(q(select * from human));
  print "$res";

foreach (@$res){
  foreach $i (0..$#$_){
    print "$_->[$i]";
  }
  print "/n";
}


$dbh->disconnect();
