/**
 *  clouds
 *    clouds.all - Cloudiness, %
 */
export class WfClouds {
  constructor(private all: number = 0) {
  }

  setCloudiness(cloudiness: number): void {
    this.all = cloudiness;
  }

  getCloudiness(): number {
    return this.all;
  }

  fillFromObject(clouds: WfClouds): void {
    Object.assign(this, clouds);
  }
}
