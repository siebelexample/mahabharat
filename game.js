// Mahabharat Puzzle Board Game Logic

class MahabharatGame {
    constructor() {
        this.boardSize = 6;
        this.playerPosition = { x: 0, y: 0 };
        this.gameBoard = document.getElementById('gameBoard');
        this.storyPanel = document.getElementById('storyPanel');
        this.positionDisplay = document.getElementById('currentPosition');
        this.resetButton = document.getElementById('resetGame');
        
        this.stories = {
            // Stories for different board positions
            '0,0': {
                title: "The Beginning - Hastinapura",
                content: "You stand at the gates of Hastinapura, the great capital of the Kuru dynasty. The palace towers majestically before you, where the epic tale of the Mahabharata begins. The air is filled with the sounds of preparation for great events to come."
            },
            '1,0': {
                title: "Bhishma's Vow",
                content: "Here stands the place where Bhishma, the son of Ganga, took his terrible vow of celibacy. His sacrifice for his father's happiness would echo through generations, making him one of the most revered figures in the epic."
            },
            '2,0': {
                title: "The Education of Princes",
                content: "In these grounds, the Kaurava and Pandava princes learned the arts of war and statecraft under the guidance of Dronacharya. Arjuna's exceptional archery skills first began to shine here."
            },
            '3,0': {
                title: "Draupadi's Swayamvara",
                content: "Witness the grand swayamvara of Draupadi where Arjuna, disguised as a Brahmin, successfully hit the target and won her hand. This event would later lead to the unique marriage of Draupadi to all five Pandava brothers."
            },
            '4,0': {
                title: "The Game of Dice",
                content: "The fateful hall where Yudhishthira lost everything in a game of dice to his cousin Duryodhana. This moment of weakness led to the exile of the Pandavas and sowed the seeds of the great war."
            },
            '5,0': {
                title: "Draupadi's Humiliation",
                content: "The dark moment when Draupadi was dragged into the court and Dushasana attempted to disrobe her. Krishna's divine intervention saved her honor, and her curse would fuel the fire of revenge."
            },
            '0,1': {
                title: "The Forest Exile Begins",
                content: "The Pandavas begin their thirteen-year exile. They leave behind their kingdom and enter the forest, facing numerous challenges and meeting wise sages who would guide them on their spiritual journey."
            },
            '1,1': {
                title: "Meeting with Sage Vyasa",
                content: "The Pandavas encounter Sage Vyasa, the narrator of this great epic. He blesses them and provides guidance for their trials ahead. His wisdom helps them understand their dharma."
            },
            '2,1': {
                title: "Bhima and Hanuman",
                content: "In the forest, Bhima encounters Hanuman, his spiritual brother (both sons of Vayu). Hanuman teaches Bhima about true strength and humility, preparing him for greater battles ahead."
            },
            '3,1': {
                title: "Arjuna's Penance",
                content: "Arjuna performs severe penance to please Lord Shiva and obtain divine weapons. His dedication and focus earn him the Pashupatastra, one of the most powerful weapons in existence."
            },
            '4,1': {
                title: "The Year of Incognito",
                content: "The Pandavas spend their final year of exile in the kingdom of Virata, living in disguise. Each brother takes on a different role, from dance teacher to cook, showing their versatility."
            },
            '5,1': {
                title: "Krishna's Diplomacy",
                content: "Lord Krishna attempts to negotiate peace between the Kauravas and Pandavas. Despite his divine wisdom and persuasive words, Duryodhana refuses to give even five villages to the Pandavas."
            },
            '0,2': {
                title: "The Great War Begins",
                content: "The eighteen-day war of Kurukshetra begins. The earth trembles as the greatest warriors of the age gather on opposite sides of the battlefield, ready to fight for dharma and justice."
            },
            '1,2': {
                title: "The Bhagavad Gita",
                content: "On the battlefield, Arjuna hesitates to fight against his relatives and teachers. Krishna delivers the immortal teachings of the Bhagavad Gita, explaining the nature of duty, righteousness, and the eternal soul."
            },
            '2,2': {
                title: "Bhishma's Fall",
                content: "The grand patriarch Bhishma falls on the tenth day of war. Lying on a bed of arrows, he waits for the auspicious time to leave his body, teaching final lessons about dharma and devotion."
            },
            '3,2': {
                title: "Dronacharya's End",
                content: "The great teacher Dronacharya is defeated through deception when he believes his son Ashwatthama is dead. The moral complexities of war are revealed as even the righteous resort to strategy."
            },
            '4,2': {
                title: "Karna's Valor",
                content: "Karna, the son of Surya, fights valiantly despite knowing his true parentage. His battle with Arjuna showcases the conflict between destiny and personal choices."
            },
            '5,2': {
                title: "Duryodhana's Last Stand",
                content: "Duryodhana makes his final stand in the lake, fighting Bhima in a mace duel. His defeat marks the end of the great war, but not without controversy over the rules of fair combat."
            },
            '0,3': {
                title: "The Night Raid",
                content: "Ashwatthama, driven by grief and anger, conducts a night raid on the Pandava camp. This act of vengeance violates the rules of war and brings a curse upon him."
            },
            '1,3': {
                title: "The Women's Lament",
                content: "Gandhari, Kunti, and the other women of both sides mourn their lost sons and husbands. Their grief highlights the ultimate cost of war, even when fought for righteousness."
            },
            '2,3': {
                title: "Yudhishthira's Coronation",
                content: "Yudhishthira is crowned as the emperor, but the victory feels hollow. The weight of the deaths in the war, including many loved ones, makes the crown feel like a burden."
            },
            '3,3': {
                title: "The Horse Sacrifice",
                content: "To wash away the sins of war, Yudhishthira performs the Ashwamedha Yajna. This great sacrifice helps restore dharma and brings prosperity back to the land."
            },
            '4,3': {
                title: "Krishna's Departure",
                content: "Lord Krishna prepares to leave for his heavenly abode. His departure marks the end of the Dwapara Yuga and the beginning of Kali Yuga, the age of darkness and discord."
            },
            '5,3': {
                title: "The Final Journey",
                content: "The Pandavas, feeling their time on earth is complete, begin their final journey to the Himalayas. One by one, they leave their mortal bodies, with only Yudhishthira reaching the gates of heaven in his physical form."
            },
            '0,4': {
                title: "The Test of Dharma",
                content: "Yudhishthira faces the final test when he encounters a dog (actually Dharma in disguise) and refuses to abandon it to enter heaven. His compassion proves his worthiness."
            },
            '1,4': {
                title: "The Celestial Reunion",
                content: "In heaven, Yudhishthira is reunited with his brothers and Draupadi. Despite initial confusion about the fate of souls, divine justice ensures that all righteous beings find their place."
            },
            '2,4': {
                title: "The Eternal Teaching",
                content: "The epic concludes with the reminder that dharma is eternal and supreme. The story of the Mahabharata serves as a guide for all humanity on the path of righteousness."
            },
            '3,4': {
                title: "Krishna's Divine Form",
                content: "Remember the moment when Krishna revealed his Vishvarupa (universal form) to Arjuna, showing the cosmic nature of divinity and the interconnectedness of all existence."
            },
            '4,4': {
                title: "The Pandava Brotherhood",
                content: "Reflect on the unbreakable bond between the five Pandava brothers - Yudhishthira the just, Bhima the strong, Arjuna the skilled, and the twins Nakula and Sahadeva."
            },
            '5,4': {
                title: "Draupadi's Strength",
                content: "Honor the strength and dignity of Draupadi, who faced every trial with courage and whose questions about dharma challenged even the wisest sages."
            },
            '0,5': {
                title: "The Sage's Wisdom",
                content: "Throughout the epic, numerous sages like Narada, Vyasa, and Vishvamitra provided guidance and wisdom, showing the importance of spiritual knowledge alongside worldly power."
            },
            '1,5': {
                title: "The Mother's Love",
                content: "Remember Kunti's sacrifices and her difficult choices, including the secret she kept about Karna. A mother's love transcends all boundaries and loyalties."
            },
            '2,5': {
                title: "The Power of Truth",
                content: "Throughout the Mahabharata, truth (satya) is shown as the highest virtue. Even in the darkest moments, those who held to truth ultimately found victory."
            },
            '3,5': {
                title: "The Cycle of Time",
                content: "The Mahabharata teaches us about the cyclical nature of time and dharma. What goes around comes around, and every action has its consequence."
            },
            '4,5': {
                title: "The Divine Play",
                content: "Understand that all events, even the tragic ones, are part of the divine play (lila). Krishna's presence throughout the epic reminds us that the divine is always with us."
            },
            '5,5': {
                title: "The Eternal Message",
                content: "The Mahabharata's message is eternal: 'Dharmo rakshati rakshitah' - Dharma protects those who protect dharma. This epic continues to guide humanity toward righteousness."
            }
        };
        
        this.init();
    }
    
    init() {
        this.createBoard();
        this.setupEventListeners();
        this.showStory(this.playerPosition.x, this.playerPosition.y);
        this.updatePosition();
    }
    
    createBoard() {
        this.gameBoard.innerHTML = '';
        
        for (let y = 0; y < this.boardSize; y++) {
            for (let x = 0; x < this.boardSize; x++) {
                const tile = document.createElement('div');
                tile.className = 'board-tile';
                tile.dataset.x = x;
                tile.dataset.y = y;
                
                // Add special tile classes
                if (this.stories[`${x},${y}`]) {
                    tile.classList.add('story-tile');
                }
                
                // Add special tiles for corners and center
                if ((x === 0 && y === 0) || (x === 5 && y === 5) || (x === 2 && y === 2)) {
                    tile.classList.add('special-tile');
                }
                
                // Add current player position
                if (x === this.playerPosition.x && y === this.playerPosition.y) {
                    tile.classList.add('character');
                }
                
                tile.addEventListener('click', () => this.handleTileClick(x, y));
                this.gameBoard.appendChild(tile);
            }
        }
    }
    
    setupEventListeners() {
        this.resetButton.addEventListener('click', () => this.resetGame());
        
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowUp':
                    e.preventDefault();
                    this.movePlayer(0, -1);
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    this.movePlayer(0, 1);
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    this.movePlayer(-1, 0);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.movePlayer(1, 0);
                    break;
            }
        });
    }
    
    handleTileClick(x, y) {
        // Check if the clicked tile is adjacent to current position or the same position
        const dx = Math.abs(x - this.playerPosition.x);
        const dy = Math.abs(y - this.playerPosition.y);
        
        if ((dx <= 1 && dy <= 1) && !(dx === 0 && dy === 0)) {
            this.movePlayerTo(x, y);
        } else if (dx === 0 && dy === 0) {
            // Clicked on current position, show story again
            this.showStory(x, y);
        }
    }
    
    movePlayer(dx, dy) {
        const newX = this.playerPosition.x + dx;
        const newY = this.playerPosition.y + dy;
        
        if (newX >= 0 && newX < this.boardSize && newY >= 0 && newY < this.boardSize) {
            this.movePlayerTo(newX, newY);
        }
    }
    
    movePlayerTo(x, y) {
        this.playerPosition.x = x;
        this.playerPosition.y = y;
        this.createBoard(); // Recreate board to update positions
        this.showStory(x, y);
        this.updatePosition();
    }
    
    showStory(x, y) {
        const storyKey = `${x},${y}`;
        const story = this.stories[storyKey];
        
        if (story) {
            this.storyPanel.innerHTML = `
                <h3>${story.title}</h3>
                <p>${story.content}</p>
                <p><em>Position: (${x + 1}, ${y + 1})</em></p>
            `;
        } else {
            this.storyPanel.innerHTML = `
                <h3>Exploring the Realm</h3>
                <p>You stand on an empty part of the battlefield at position (${x + 1}, ${y + 1}). The echoes of great deeds and profound wisdom still linger in the air. Move to discover more stories from the great epic of Mahabharata.</p>
            `;
        }
    }
    
    updatePosition() {
        this.positionDisplay.textContent = `${this.playerPosition.x + 1}, ${this.playerPosition.y + 1}`;
    }
    
    resetGame() {
        this.playerPosition = { x: 0, y: 0 };
        this.createBoard();
        this.showStory(0, 0);
        this.updatePosition();
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MahabharatGame();
});