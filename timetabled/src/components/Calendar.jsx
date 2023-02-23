import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event="Breakfast 🥞🍳" color="green" />
            <Event event="Breakfast 🥞🍳" color="green" />
            <Event event="Breakfast 🥞🍳" color="green" />
            <Event event="Fast 🥛" color="pink" />
            <Event event="Breakfast 🥞🍳" color="green" />
            <Event event="Breakfast 🥞🍳" color="green" />
            <Event event="Breakfast 🥞🍳" color="green" />
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <Event event="Study Block ✍🏻" color="blue" />
            <td></td>
            <Event event="Study Block ✍🏻" color="blue" />
            <td></td>
            <Event event="Study Block ✍🏻" color="blue" />
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <Event event="Study Block ✍🏻" color="blue" />
            <td></td>
            <Event event="Study Block ✍🏻" color="blue" />
            <td></td>
            <Event event="Study Block ✍🏻" color="blue" />
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 am</td>
            <Event event="Lunch 🍝" color="pink" />
            <Event event="Lunch 🍝" color="pink" />
            <Event event="Lunch 🍝" color="pink" />
            <Event event="Lunch 🍝" color="pink" />
            <Event event="Lunch 🍝" color="pink" />
            <Event event="Lunch 🍝" color="pink" />
            <Event event="Lunch 🍝" color="pink" />
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <Event event="Study Block ✍🏻" color="blue" />
            <td></td>
            <Event event="Study Block ✍🏻" color="blue" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <Event event="Study Block ✍🏻" color="blue" />
            <td></td>
            <Event event="Study Block ✍🏻" color="blue" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <Event event="Gym Time 💪🏻" color="orange" />
            <td></td>
            <Event event="Gym Time 💪🏻" color="orange" />
            <td></td>
            <Event event="Gym Time 💪🏻" color="orange" />
            <td></td>
            <Event event="Gym Time 💪🏻" color="orange" />
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <Event event="Dinner 🥙" color="green" />
            <Event event="Dinner 🥙" color="green" />
            <Event event="Dinner 🥙" color="green" />
            <Event event="Dinner 🥙" color="green" />
            <Event event="Dinner 🥙" color="green" />
            <Event event="Dinner 🥙" color="green" />
            <Event event="Dinner 🥙" color="green" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
