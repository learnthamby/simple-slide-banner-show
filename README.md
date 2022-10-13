# simple-slide(banner) show
Slider with thumbnail with play pause button


______________________________________________________________________________________
for animation you can update following in script.js file

var startimage = 1;    //choose the image for startup <br>
var sliderduration = 2000; //choose the time duration <br>
var animationEffects = "fadeIn"; ////choose the animation from https://animate.style/ (https://github.com/animate-css/animate.css) <br>


______________________________________________________________________________________
If you want dont want fixed height goto main.css line:54

.sliderHolder {
    float: left;
    width: 100%;
    <b>height: 416px;</b>
    overflow: hidden;
}

<strong>remove the <i>height</i> so you will get actuall height of the image, but put same height images so it wont disort</strong>
______________________________________________________________________________________
<h3>Credits</h3>
animated using :  https://github.com/animate-css/animate.css

<br>
images are taken from:<br>
Photo by Luis del Río: https://www.pexels.com/photo/person-walking-between-green-forest-trees-15286/<br>
Photo by stein egil liland: https://www.pexels.com/photo/scenic-view-of-snow-capped-mountains-during-night-3408744/<br>
Photo by Jaime Reimer: https://www.pexels.com/photo/beautiful-view-of-moraine-lake-2662116/<br>
Photo by Kammeran Gonzalez-Keola: https://www.pexels.com/photo/man-riding-surfboard-in-wavy-ocean-7925859/<br>
Photo by Alesia  Kozik: https://www.pexels.com/photo/river-in-the-middle-of-forest-6004828/<br>
