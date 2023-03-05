import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FacilityType } from '../dto/account-configuration.dto';

@Injectable({
  providedIn: 'root',
})
export class FormGroupHolder {
  private accountConfiguration: FormGroup;

  constructor(private fb: FormBuilder) {
    this.accountConfiguration = this.fb.group({
      userData: this.fb.group({
        name: this.fb.control(''),
        lastName: this.fb.control(''),
        city: this.fb.control(''),
        flatNumber: this.fb.control(''),
        post: this.fb.control(''),
        zipCode: this.fb.control(''),
        houseNumber: this.fb.control(''),
      }),
      facilities: this.fb.array([]),
    });
  }

  getUserDataFormGroup(): FormGroup {
    return this.accountConfiguration.get('userData') as FormGroup;
  }

  getNewFacilityFormGroup(facilityType: FacilityType): FormGroup {
    return this.fb.group({
      facilityName: this.fb.control(''),
      facilityType: this.fb.control(facilityType),
      rentedAreas: this.fb.array([]),
    });
  }

  getFacilityFormGroup(index: number) {
    const facilitiesArrayRef = this.getFacilitiesFormArray();
    return facilitiesArrayRef.at(index) as FormGroup;
  }

  removeFacilityFormGroup(index: number) {
    const facilitiesArrayRef = this.getFacilitiesFormArray();
    facilitiesArrayRef.removeAt(index);
  }

  insertFacility(facilityFormGroup: FormGroup) {
    const facilitiesRef = this.getFacilitiesFormArray();
    facilitiesRef.push(facilityFormGroup);
  }

  getNewRentedAreaFormGroup(): FormGroup {
    return this.fb.group({
      name: this.fb.control(''),
      rentedAreaType: this.fb.control(''),
      deafultPrice: this.fb.control(null),
      maxGuestCount: this.fb.control(0),
      arrivalHour: this.fb.control(null),
      departureHour: this.fb.control(null),
    });
  }

  getRentedAreaFormGroup(
    facilityIndex: number,
    rentedAreaIndex: number
  ): FormGroup {
    const rentedAreaFormArray = this.getRentedAreaFormArray(facilityIndex);
    return rentedAreaFormArray.at(rentedAreaIndex) as FormGroup;
  }

  removeRentedAreaFormGroup(facilityIndex: number, rentedAreaIndex: number) {
    const rentedAreaFormArray = this.getRentedAreaFormArray(facilityIndex);
    rentedAreaFormArray.removeAt(rentedAreaIndex);
  }

  insertRentedArea(facilityIndex: number, rentedAreaFormGroup: FormGroup) {
    const rentedAreaFormArray = this.getRentedAreaFormArray(facilityIndex);
    rentedAreaFormArray.push(rentedAreaFormGroup);
  }

  private getFacilitiesFormArray(): FormArray {
    return this.accountConfiguration.get('facilities') as FormArray;
  }
  private getRentedAreaFormArray(facilityIndex: number): FormArray {
    const facilityFormGroup = this.getFacilitiesFormArray().at(facilityIndex);
    return facilityFormGroup.get('rentedAreas') as FormArray;
  }
}
