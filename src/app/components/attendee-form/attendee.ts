export class Attendee {
  constructor(
    public name?: string,
    public last_name?: string,
    public work_email?: string,
    public country?: string,
    public phone_number?: number,
    public work_position?: string
  ) {}
}