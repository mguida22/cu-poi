//
//  ViewController.swift
//  cu-poi
//
//  Created by Michael on 2/2/15.
//  Copyright (c) 2015 mguida22. All rights reserved.
//

import UIKit
import MapKit

class ViewController: UIViewController {
    
    @IBOutlet weak var mapView: MKMapView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let startLocation = CLLocationCoordinate2D(latitude: 40.008180, longitude: -105.267573)
        
        let span = MKCoordinateSpanMake(0.05, 0.05)
        let region = MKCoordinateRegion(center: startLocation, span: span)
        
        mapView.setRegion(region, animated: true)
        
        mapView.mapType = MKMapType.Hybrid
        
        annotateMap()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    func annotateMap(){
        
        var locationList: [CLLocationCoordinate2D] = [CLLocationCoordinate2D(latitude: 40.007921, longitude: -105.265934), CLLocationCoordinate2D(latitude: 40.006811, longitude: -105.265382), CLLocationCoordinate2D(latitude: 40.007763, longitude: -105.264566), ]
        var nameList: [String] = ["Benson Earth Sciences", "Aden Hall", "Mathematics Building"]
        var keyList: [String] = ["BESC", "ADEN", "MATH"]
        
        for index in 0...2 {
            var annotation = MKPointAnnotation()
            annotation.setCoordinate(locationList[index])
            annotation.title = nameList[index]
            annotation.subtitle = keyList[index]
            
            mapView.addAnnotation(annotation)
        }
    }
    
}