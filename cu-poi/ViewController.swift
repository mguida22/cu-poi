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
        

        let annotation = MKPointAnnotation()
        annotation.setCoordinate(startLocation)
        annotation.title = "University of Colorado Boulder"
        annotation.subtitle = "Main Campus"
        
        mapView.addAnnotation(annotation)

    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
}