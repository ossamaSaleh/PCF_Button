# Trigger Button – User Guide

## Purpose

The **PCF Main Form Button** allows you to perform a specific action on a record—such as validation, eligibility check, recalculation, or other business logic—by simply clicking a button on the form.

Instead of navigating to a ribbon command, this button provides a simple, direct, and consistent way to trigger automated logic on the form.

---

## Where You Will See the Button

The button appears directly on the form as a small, styled **Info Button**, typically labeled:
- **Submit**
- Or another label, depending on your SingleLine field

Your organization may place it near:

- The top of the form  
- A section for validation  
- A group of fields requiring user guidance  

> 💡 **Note**: The button text is customizable, so you may see different labels in different forms.

---

## What Happens When You Click the Button

When you click the button:

1. The button writes a **timestamp** into a hidden system field (Target Field) on the form (Data Type is SingleLine).  
2. This makes the system detect a **field change**.  
3. inside the Target Field you can set onchange function, and the js will fired.
<img width="744" height="1610" alt="image" src="https://github.com/user-attachments/assets/4ed12135-7772-4e83-bc19-71c1cda5e542" />

✅ **You do not need to type anything, refresh, or save manually the js will run based on your onchange event in the Target Field.**

---

## Notes and Best Practices

- ✅ Always let the form **fully load** before using the button  
- ✅ If instructed, **run the button after modifying key fields**  
- ✅ **Report any error messages exactly as they appear**  
- ❌ **Do not rely on browser Back/Forward buttons**—always use form navigation  

