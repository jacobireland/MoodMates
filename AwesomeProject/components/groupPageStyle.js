import {StyleSheet} from 'react-native'

const groupStyles = StyleSheet.create({
    container: {
		flex: 1,
	},

    appContent: {
		marginTop: 81,
		marginLeft: 30,
		marginRight: 30,
		flex: 1,
	},

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0, 
    },

    headerText: {
        fontSize: 32,
        textAlign: 'center',
        marginTop: 0,  
    },

    icon: {
        width: 24,
        height: 24,
		tintColor: '#E4ECF1'
    },

	settingIcon: {
		width: 24,
        height: 24,
		tintColor: '#E4ECF1',
		marginRight: 100

	},

    rectangle: {
        width: 225,
        height: 93,
        marginTop: 25,
        borderRadius: 15,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },

    groupMoodText: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 68, // Adjust the marginBottom to leave room for other content 67
    },


    moodIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50, 
        height: 0,
    },

    card: {
        width: 138,
        height: 204,
        backgroundColor: '#A6CFD5',
        borderRadius: 15,
        marginTop: 188,
        alignSelf: 'center', 
        borderWidth: 1,
        borderColor: 'black',
    },

    proposeActivityText: {
        fontSize: 18,
        textAlign: 'center', 
        marginTop: 30, 
        lineHeight: 24,
		color: '#1F2532'
    },

    addIcon: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginTop: 42, 
		tintColor: '#1F2532'
      },
    

    moodIconTextContainer: {
        marginTop: 10, // Adjust this value based on your preference
    },


    oliviaMoodIconText: {
        fontSize: 18,
        textAlign: 'center',
        top: -230,
    },

    oliviaMoodIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: -260, 
        height: 0,
    },

    benMoodIconText: {
        fontSize: 18,
        top: -184,
        left: 301,
    },
    
    benMoodIconContainer: {
        justifyContent: 'center',
        left: 276,
        top: -214, 
        height: 0,
    },
    
    justinMoodIconText: {
        fontSize: 18,
       top: -216,
        left: 14
    },
    
    justinMoodIconContainer: {
        justifyContent: 'center',
        top: -246, 
        height: 0,
        right: 4,
    },

    mayaMoodIconText: {
        fontSize: 18,
        top: -110,
        left: 304,
    },
    
    mayaMoodIconContainer: {
        justifyContent: 'center',
        left: 284,
        top: -140, 
        height: 0,
    },

    jacobMoodIconText: {
        fontSize: 18,
        top: -141,
        left: 0
    },
    
    jacobMoodIconContainer: {
        justifyContent: 'center',
        top: -171, 
        height: 0,
        right: 17,
    },

    charlieMoodIconText: {
        fontSize: 18,
        top: -36,
        left: 288,
    },
    
    charlieMoodIconContainer: {
        justifyContent: 'center',
        left: 276,
        top: -66, 
        height: 0,
    },

    anishMoodIconText: {
        fontSize: 18,
        top: -66,
        left: 16
    },
    
    anishMoodIconContainer: {
        justifyContent: 'center',
        top: -96, 
        height: 0,
        right: 4,
    },

    myMoodIconText: {
        fontSize: 18,
        textAlign: 'center',
        top: -30,
    },
    
    myMoodIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: -60, 
        height: 0,
    },

    movieNightCard: {
        padding: 12,
        backgroundColor: 'white',
        borderRadius: 15,
      },
      movieNightTitle: {
        fontSize: 16,
        textAlign: 'center',
		color: '#1F2532',
      },
      proposedByText: {
        fontSize: 14,
        marginTop: 8,
        textAlign: 'center',
		color: '#1F2532',
      },
      proposerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
		color: '#1F2532',
      },
      proposerIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
      },
      proposerName: {
        top:-3,
        fontSize: 12,
        alignSelf: 'center',
		color: '#1F2532',
      },
      dateTimeLocation: {
        marginTop: 2,
		color: '#1F2532',
      },
      dateTimeLocationText: {
        fontSize: 13,
        top: 2,
		color: '#1F2532',
      },
      switchIcon: {
        width: 40,
        height: 16,
        alignSelf: 'center',
        top: 12,
      },

      cardMoodIcon: {
        top: -3,
        alignSelf: 'center',
        left: 36,
      }


 })

export default groupStyles;