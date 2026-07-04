document.addEventListener('DOMContentLoaded', function() {
    const selectBtns = document.querySelectorAll('.select-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    const modalOverlay = document.getElementById('modal-overlay');
    const summary = document.getElementById('summary');
    const selectedHalls = document.getElementById('selected-halls');
    const selectedFood = document.getElementById('selected-food');
    const totalPeople = document.getElementById('total-people');
    const totalCost = document.getElementById('total-cost');
    const numPeopleInput = document.getElementById('num-people');
    const closeModal = document.getElementById('close-modal');

    let selectedItems = {
        halls: [],
        food: null
    };

    selectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.dataset.type;
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);

            if (type === 'hall') {
                const index = selectedItems.halls.findIndex(item => item.name === name);
                if (index > -1) {
                    selectedItems.halls.splice(index, 1);
                    this.classList.remove('selected');
                    this.textContent = 'Select';
                } else {
                    selectedItems.halls.push({ name, price });
                    this.classList.add('selected');
                    this.textContent = 'Selected';
                }
            } else if (type === 'food') {
                if (selectedItems.food && selectedItems.food.name === name) {
                    selectedItems.food = null;
                    this.classList.remove('selected');
                    this.textContent = 'Select';
                } else {
                    if (selectedItems.food) {
                        const prevBtn = document.querySelector(`.select-btn[data-name="${selectedItems.food.name}"]`);
                        prevBtn.classList.remove('selected');
                        prevBtn.textContent = 'Select';
                    }
                    selectedItems.food = { name, price };
                    this.classList.add('selected');
                    this.textContent = 'Selected';
                }
            }
        });
    });

    closeModal.addEventListener('click', function() {
        modalOverlay.style.display = 'none';
    });

    checkoutBtn.addEventListener('click', function() {
        const numPeople = parseInt(numPeopleInput.value);
        let total = 0;

        selectedHalls.textContent = `Selected Halls: ${selectedItems.halls.map(item => item.name).join(', ') || 'None'}`;
        selectedFood.textContent = `Selected Food: ${selectedItems.food ? selectedItems.food.name : 'None'}`;
        totalPeople.textContent = `Number of People: ${numPeople}`;

        selectedItems.halls.forEach(hall => total += hall.price);
        if (selectedItems.food) {
            total += selectedItems.food.price * numPeople;
        }

        totalCost.textContent = `Total Cost: LKR ${total.toFixed(2)}`;

        modalOverlay.style.display = 'flex';

        // Send booking data to backend
        const bookingData = {
            halls: selectedItems.halls.map(item => item.name).join(', '),
            food: selectedItems.food ? selectedItems.food.name : null,
            people: numPeople,
            totalCost: total
        };

        fetch('http://localhost:8080/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Booking saved:', data);
            alert('Booking saved successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error saving booking: ' + error);
        });
    });
});
