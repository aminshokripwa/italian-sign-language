import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ExampleSign = new GestureDescription('Example');

//Thumb
ExampleSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ExampleSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

//Index
ExampleSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ExampleSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Middle
ExampleSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ExampleSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

//Ring
ExampleSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ExampleSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

//Pinky
ExampleSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ExampleSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

