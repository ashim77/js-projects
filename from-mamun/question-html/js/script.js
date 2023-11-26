let data = []; // Array to store the data
let activeIndex = -1; // Currently active index

function addField() {
  const newItem = {
    title: '',
    type: 'one',
    description: ''
  };
  data.push(newItem);
  updateUI();
}

function removeField(index) {
  data.splice(index, 1);
  updateUI();
}

function toggleActive(index) {
  // Toggle the active state for the clicked item
  if (activeIndex === index) {
    activeIndex = -1; // Clicked on the active item, so close it
  } else {
    activeIndex = index;
  }
  updateUI();
}

function updateUI() {
  const allRepeater = document.getElementById('allRepeater');
  allRepeater.innerHTML = ''; // Clear previous content

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const repeaterItem = document.createElement('div');
    repeaterItem.classList.add('repeater-fields');

    const isActive = i === activeIndex;

    // Construct the repeater item content
    repeaterItem.innerHTML = `
      <div class="repeater-head" onclick="toggleActive(${i})">
        <div class="repeater-item-title">Item ${i + 1}</div>
        <div class="repeater-item-remove">
          <span class="remove-icon" onclick="removeField(${i})">X</span>
        </div>
      </div>
      <div class="repeater-controls ${isActive ? 'active-repeter' : ''}">
        <div class="field-area">
          <label>Heading</label>
          <input type="text" value="${item.title}" 
                 onchange="updateField(${i}, 'title', this.value)" />
        </div>
        <div class="field-area">
          <label>Type</label>
          <select onchange="updateField(${i}, 'type', this.value)">
            <option value="one" ${item.type === 'one' ? 'selected' : ''}>Type One</option>
            <option value="two" ${item.type === 'two' ? 'selected' : ''}>Type Two</option>
            <option value="three" ${item.type === 'three' ? 'selected' : ''}>Type Three</option>
          </select>
        </div>
        <div class="field-area">
          <label>Description</label>
          <input type="text" value="${item.description}" 
                 onchange="updateField(${i}, 'description', this.value)" />
        </div>
      </div>
    `;

    allRepeater.appendChild(repeaterItem);
  }
}

function updateField(index, key, value) {
  data[index][key] = value;
}

document.getElementById('addRepeater').addEventListener('click', addField);
document.getElementById('getRepeaterData').addEventListener('click', () => {
  console.log('Repeater Data:', data);
});
