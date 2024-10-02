// utilities
var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
  };
  
  // setup typewriter effect in the terminal demo
  if (document.getElementsByClassName('demo').length > 0) {
    var i = 0;
    var txt = `function checkMood(person) {
    return person.isLearning("JavaScript") ? "happy" : "neutral";
  }
  
  function main() {
    let person = {
      name: "You",
      mood: "neutral",
      learn: function(topic) { this.mood = "happy"; },
      isLearning: function(topic) { return topic === "JavaScript"; }
    };
    console.log(\`Mood: \${checkMood(person)}\`);
    person.learn("JavaScript");
    console.log(\`Mood: \${checkMood(person)}\`); // "happy"
  }
  `;
    var speed = 60;
  
    function typeItOut () {
      if (i < txt.length) {
        document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }
  
    setTimeout(typeItOut, 1800);
  }
  
  // toggle tabs on codeblock
  window.addEventListener("load", function() {
    // get all tab_containers in the document
    var tabContainers = getAll(".tab__container");
  
    // bind click event to each tab container
    for (var i = 0; i < tabContainers.length; i++) {
      get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
    }
  
    // each click event is scoped to the tab_container
    function tabClick (event) {
      var scope = event.currentTarget.parentNode;
      var clickedTab = event.target;
      var tabs = getAll('.tab', scope);
      var panes = getAll('.tab__pane', scope);
      var activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

    // remove all active tab classes
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    // remove all active pane classes
    for (var i = 0; i < panes.length; i++) {
      panes[i].classList.remove('active');
    }

    // apply active classes on desired tab and pane
    clickedTab.classList.add('active');
    activePane.classList.add('active');
  }
});

//in page scrolling for documentaiton page
var btns = getAll('.js-btn');
var sections = getAll('.js-section');

function setActiveLink(event) {
  // remove all active tab classes
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function smoothScrollTo(i, event) {
  var element = sections[i];
  setActiveLink(event);

  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop - 20,
    'left': 0
  });
}

if (btns.length && sections.length > 0) {
  for (var i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', smoothScrollTo.bind(this,i));
  }
}

// fix menu to page-top once user starts scrolling
window.addEventListener('scroll', function () {
  var docNav = get('.doc__nav > ul');

  if( docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

// responsive navigation
var topNav = get('.menu');
var icon = get('.toggle');

window.addEventListener('load', function(){
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});

document.addEventListener('DOMContentLoaded', (event) => {
  const changelogItems = document.querySelectorAll('.changelog__item');
  const latestChangelog = changelogItems[0]; // Assuming the latest changelog is the first item

  // Hide all changelog items
  changelogItems.forEach(item => item.style.display = 'none');

  // Show only the latest changelog item
  latestChangelog.style.display = 'flex';
  latestChangelog.classList.add('latest');

  // Initialize button text and onclick function
  const button = document.querySelector('.changelog__callout');
  button.textContent = 'Hide Latest Changelog';
  button.onclick = hideChangelog;
});

function toggleChangelog() {
  const changelogItems = document.querySelectorAll('.changelog__item');
  const latestChangelog = changelogItems[0]; // Assuming the latest changelog is the first item

  // Hide all changelog items
  changelogItems.forEach(item => item.style.display = 'none');

  // Show only the latest changelog item
  latestChangelog.style.display = 'flex';

  // Optionally, change the button text
  const button = document.querySelector('.changelog__callout');
  button.textContent = 'Hide Latest Changelog';
  button.onclick = hideChangelog;
}

function hideChangelog() {
  const changelogItems = document.querySelectorAll('.changelog__item');

  // Show all changelog items
  changelogItems.forEach(item => item.style.display = 'flex');

  // Optionally, change the button text
  const button = document.querySelector('.changelog__callout');
  button.textContent = 'Show Latest Changelog';
  button.onclick = toggleChangelog;
}

  document.addEventListener("DOMContentLoaded", function() {
    var topics = [
      '==or===.html',
      'arrays.html',
      'async-js.html',
      'class.html',
      'Closures.html',
      'deep-shallow.html',
      'event-listener.html',
      'hosting.html',
      'local-storage.html',
      'prototypes.html',
      'try-catch.html',
      'variable-scoping.html'
    ];

    var gallery = document.getElementById('gallery');
    var searchBar = document.getElementById('searchBar');

    // Dynamisch die Galerie-Elemente erstellen
    topics.forEach(function(topic) {
      var column = document.createElement('div');
      column.className = 'column';
      var card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${topic.replace('.html', '').replace(/-/g, ' ')}</h3>`;
      card.onclick = function() {
        window.location.href = 'topics/' + topic;
      };
      column.appendChild(card);
      gallery.appendChild(column);
    });

    // Suchfunktion implementieren
    searchBar.addEventListener('input', function() {
      var filter = searchBar.value.toLowerCase();
      var items = gallery.getElementsByClassName('column');
      Array.from(items).forEach(function(item) {
        var text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });