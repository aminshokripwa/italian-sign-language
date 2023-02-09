import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ExperienceSign = new GestureDescription('Expérience');

//Thumb
ExperienceSign.addCurl(Finger.Thumb, FingerCurl.NofCurl, 0.9);
ExperienceSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

//Index
ExperienceSign.addCurl(Finger.Index, FingerCurl.NofCurl, 1.0);
ExperienceSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

//Middle
ExperienceSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
ExperienceSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

//Ring
ExperienceSign.addCurl(Finger.Ring, FingerCurl.NofCurl, 1.0);
ExperienceSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.9);

//Pinky
ExperienceSign.addCurl(Finger.Pinky, FingerCurl.NofCurl, 1.0);
ExperienceSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.9);

