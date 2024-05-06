<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>BMI Calculator</h2>
        <form id="BMI_Form">
            <label for="gender">Gender</label>
            <select id="gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <label for="age">Age</label>
            <input type="number" id="age" placeholder="Enter Age" required>

            <label for="height-feet">Height</label>
            <input type="number" id="height-feet" placeholder="Feet" required>
            <input type="number" id="height-inches" placeholder="Inches" required>

            <label for="weight">Weight</label>
            <input type="number" id="weight" placeholder="Enter Weight in KGs">

            <input type="submit" value="Calculate BMI">

        </form>

        <div id="result"> fbfb </div>
    </div>
</body>
</html>