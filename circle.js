function drawCircle() {
  var circle_path_radius = 100;
  var circle_path_center_x = 200;
  var circle_path_center_y = 200;
  var time = millis() / 1000

  var x = circle_path_radius*cos(time) + circle_path_center_x;
  var y = circle_path_radius*sin(time) + circle_path_center_y;

  fill('white');
  circle(x, y, 100)
}