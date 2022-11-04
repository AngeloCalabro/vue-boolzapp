const { createApp } = Vue

createApp({
    data() {
        return {
            activIndex: 0,
            newmessage: '',
            searchTerm: '',
            msgOpt: {
                index: null,
                show: false
            },
            chatOpt: {
                index: null,
                show: false
            },
            showChat: false,
            showemoji: false,
            icons: [
                '&#128512;',
                '&#128513;',
                '&#128514;',
                '&#128515;',
                '&#128516;',
                '&#128517;',
                '&#128518;',
                '&#128519;',
                '&#128521;',
                '&#128522;',
                '&#128523;',
                '&#128524;',
                '&#128525;',
                '&#128526;',
                '&#128528;',
                '&#128529;',
                '&#128530;',
                '&#128536;',
                '&#128545;',
                '&#128548;',
                '&#128561;',
                '&#129315;',
                '&#129299;',
                '&#129319;',
                '&#129321;',
                '&#129325;',
                '&#129488;',
                '&#9996;',
                '&#9995;',
                '&#10024;',
                '&#10062;',
                '&#128064;',
                '&#128077;',
                '&#128079;',
                '&#128152;',
                '&#128149;',
                '&#128156;',
                '&#128158;',
                '&#128584;',
                '&#129310;',
                '&#129505;',
                '&#127802;',
                '&#127801;',
                '&#9749;'
            ],
            contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    computed: {
        filteredContacts() {
            return this.contacts.filter((item) => {
                const name = item.name.toLowerCase()
                return name.includes(this.searchTerm.toLowerCase())
            })
        }
    },
    methods: {
        getChat(id) {
            this.activIndex = this.contacts.findIndex((item) => parseInt(item.id) === parseInt(id));
            this.changeView();
        },
        changeView() {

        },
        sendMessage() {
            if (!this.newmessage) return;
            const d = new Date();
            let newdate = this.getFormattedDate(d);
            const newSentMessage = {
                date: newdate,
                message: this.newmessage,
                status: 'sent'
            }
            this.contacts[this.activIndex].messages.push(newSentMessage);
            this.newmessage = '';

            this.$nextTick(() => {
                const el = this.$refs.msg[this.$refs, msg.length - 1];
                el.scrollIntoView();
            });

            setTimeout(() => {
                const d = new Date();
                let newdate = this.getFormattedDate(d);
                const newReceivedMessage = {
                    date: newdate,
                    message: 'OPS',
                    status: 'received'
                }
                this.contacts[this.activIndex].messages.push(newReceivedMessage);
                this.$nextTick(() => {
                    const el = this.$refs.msg[this.$refs, msg.length - 1];
                    el.scrollIntoView();
                });
            }, 1000)
        },
        getLastMessage(item) {
            const arraymsg = item.messages.filter((message) => message.status === 'received');
            if (arraymsg.length == 0) {
                return {
                    date: '10/01/2020 00:00:00',
                    message: '',
                    status: 'received'
                }
            }
            return arraymsg[arraymsg.length - 1]
        },
        getFormattedDate(date) {
            return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`;
        },
        removeChat(i) {
            this.contacts[this.activIndex].remove(i, 1);
        },
        removeMsg(i) {
            this.contacts[this.activIndex].messages.splice(i, 1);
        },
        showOption(i) {
            if (i === this.msgOpt.index && this.msgOpt.show) {
                this.msgOpt.index = null;
                this.msgOpt.show = false;
            } else {
                this.msgOpt.index = i;
                this.msgOpt.show = true;
            }
        },
        showListOption(i) {
            if (i === this.chatOpt.index && this.chatOpt.show) {
                this.chatOpt.index = null;
                this.chatOpt.show = false;
            } else {
                this.chatOpt.index = i;
                this.chatOpt.show = true;
            }
        },
        showEmoji() {
            this.showemoji = !this.showemoji
        }
    }

}).mount('#app')