const stationDistances = {
            "S1": {
                "S1": 0,
                "S2": 2,
                "S3": 2,
                "S4": 5,
                "S5": 5,
                "S6": 9,
                "S7": 9,
                "S8": 9,
                "S9": 13,
                "S10": 13,
                "S11": 13,
                "S12": 17,
                "S13": 17
            },
            "S2": {
                "S1": 2,
                "S2": 0,
                "S3": 2,
                "S4": 2,
                "S5": 5,
                "S6": 5,
                "S7": 9,
                "S8": 9,
                "S9": 9,
                "S10": 13,
                "S11": 13,
                "S12": 13,
                "S13": 17
            },
            "S3": {
                "S1": 2,
                "S2": 2,
                "S3": 0,
                "S4": 2,
                "S5": 2,
                "S6": 5,
                "S7": 5,
                "S8": 9,
                "S9": 9,
                "S10": 9,
                "S11": 13,
                "S12": 13,
                "S13": 13
            },
            "S4": {
                "S1": 5,
                "S2": 2,
                "S3": 2,
                "S4": 0,
                "S5": 2,
                "S6": 2,
                "S7": 5,
                "S8": 5,
                "S9": 9,
                "S10": 9,
                "S11": 9,
                "S12": 13,
                "S13": 13
            },
            "S5": {
                "S1": 5,
                "S2": 5,
                "S3": 2,
                "S4": 2,
                "S5": 0,
                "S6": 2,
                "S7": 2,
                "S8": 5,
                "S9": 5,
                "S10": 9,
                "S11": 9,
                "S12": 9,
                "S13": 13
            },
            "S6": {
                "S1": 9,
                "S2": 5,
                "S3": 5,
                "S4": 2,
                "S5": 2,
                "S6": 0,
                "S7": 2,
                "S8": 2,
                "S9": 5,
                "S10": 5,
                "S11": 9,
                "S12": 9,
                "S13": 9
            },
            "S7": {
                "S1": 9,
                "S2": 9,
                "S3": 5,
                "S4": 5,
                "S5": 2,
                "S6": 2,
                "S7": 0,
                "S8": 2,
                "S9": 2,
                "S10": 5,
                "S11": 5,
                "S12": 9,
                "S13": 9
            },
            "S8": {
                "S1": 9,
                "S2": 9,
                "S3": 9,
                "S4": 5,
                "S5": 5,
                "S6": 2,
                "S7": 2,
                "S8": 0,
                "S9": 2,
                "S10": 2,
                "S11": 5,
                "S12": 5,
                "S13": 9
            },
            "S9": {
                "S1": 13,
                "S2": 9,
                "S3": 9,
                "S4": 9,
                "S5": 5,
                "S6": 5,
                "S7": 2,
                "S8": 2,
                "S9": 0,
                "S10": 2,
                "S11": 2,
                "S12": 5,
                "S13": 5
            },
            "S10": {
                "S1": 13,
                "S2": 13,
                "S3": 9,
                "S4": 9,
                "S5": 9,
                "S6": 5,
                "S7": 5,
                "S8": 2,
                "S9": 2,
                "S10": 0,
                "S11": 2,
                "S12": 2,
                "S13": 5
            },
            "S11": {
                "S1": 13,
                "S2": 13,
                "S3": 13,
                "S4": 9,
                "S5": 9,
                "S6": 9,
                "S7": 5,
                "S8": 5,
                "S9": 2,
                "S10": 2,
                "S11": 0,
                "S12": 2,
                "S13": 2
            },
            "S12": {
                "S1": 17,
                "S2": 13,
                "S3": 13,
                "S4": 13,
                "S5": 9,
                "S6": 9,
                "S7": 9,
                "S8": 5,
                "S9": 5,
                "S10": 2,
                "S11": 2,
                "S12": 0,
                "S13": 2
            },
            "S13": {
                "S1": 17,
                "S2": 17,
                "S3": 13,
                "S4": 13,
                "S5": 13,
                "S6": 9,
                "S7": 9,
                "S8": 9,
                "S9": 5,
                "S10": 5,
                "S11": 2,
                "S12": 2,
                "S13": 0
            },
        };

        const farePerUnit = 11;

        document.getElementById('calculate').addEventListener('click', calculate);
        document.getElementById('discount').addEventListener('click', discount);

        function calculate() {
            const start = document.getElementById('from').value;
            const end = document.getElementById('to').value;

            if (start === end) {
                document.getElementById('result').innerText = "You are already at the destination.";
                return;
            }

            const distance = stationDistances[start][end];
            const fare = distance + farePerUnit;


            document.getElementById('result').innerText = `P${fare.toFixed(2)}`;
        }

        function discount() {
            const start = document.getElementById('from').value;
            const end = document.getElementById('to').value;

            if (start === end) {
                document.getElementById('result').innerText = "You are already at the destination.";
                return;
            }
            const distance = stationDistances[start][end];
            const discounted = distance + farePerUnit * 0.8;

            document.getElementById('result').innerText = `P${discounted.toFixed(2)}`;
        }