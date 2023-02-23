def add_time(start, duration, day=None):
    start_time = datetime.strptime(start, "%I:%M %p")
    duration_time = datetime.strptime(duration, "%H:%M")
    end_time = start_time + duration_time
    days_passed = end_time.day - start_time.day
    final_time = end_time.strftime("%I:%M %p")
    if end_time.hour >= 12:
        final_time += " PM"
    else:
        final_time += " AM"
    if days_passed == 1:
        final_time += " (next day)"
    elif days_passed > 1:
        final_time += f" ({days_passed} days later)"
    if day:
        day = day.lower()
        weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        start_weekday = start_time.weekday()
        end_weekday = (start_weekday + days_passed) % 7
        final_day = weekdays[end_weekday].capitalize()
        final_time = final_time + f", {final_day}"
    return final_time