import React, { Component }  from 'react'
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native'
import { Video } from 'expo'
import { FontAwesome } from '@expo/vector-icons'
import Modal from 'react-native-modal'
import { connect } from 'react-redux'

class SkillItem extends React.Component {

  state = {
    shouldPlay: true,
    isModalVisible: false,
  };
     
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };


  _toggleAcquis(skill) {
    const action = { type: "TOGGLE_ACQUIS", value: skill }
    this.props.dispatch(action)
  }


  _displayImage(skill) {
      var sourceImage = require('../assets/add.png')
      if (this.props.acquisSkill.findIndex(item => item.id === skill.id) !== -1) {
        sourceImage = require('../assets/checked.png')
      }
      return (
        <Image
          source={sourceImage}
        />
      )
  }

  render() {
    const skill = this.props.skill
    const isSkillAcquis = this.props.isSkillAcquis
    var vid = skill.video
    var img = skill.image

    if (isSkillAcquis) {
      return null
    }
    return (
      <View style={styles.main_container}>
        <View style={{ flex: 1,  padding: 5  }}>
          <Modal isVisible={this.state.isModalVisible}>
              <Expo.Video 
                resizeMode="contain"
                shouldPlay={this.state.shouldPlay}
                isLooping
                style={{
                  flex: 1
                }}
                source={vid}
              />
              <Button title="Fermer" onPress={this.toggleModal} />
          </Modal>
        </View>

        <View style={styles.child_container}>
          <View style={styles.col_left}>
            <TouchableOpacity  onPress={this.toggleModal}>
              <Image 
                resizeMode="cover" 
                source={img}
                style={{ borderBottomLeftRadius: 3, borderTopLeftRadius: 3, overflow: 'hidden' }}
              >
              </Image>
            </TouchableOpacity>

            <View style={{position: 'absolute', top: 40, left: 40,}}>
              <TouchableOpacity  onPress={this.toggleModal}>
                <FontAwesome name="play" color="white" size={25}/>
              </TouchableOpacity>  
            </View>
          </View>  
          <View style={styles.col_center}>
            <Text>{skill.title}</Text>
          </View>
          <View style={styles.col_right}>
            <TouchableOpacity
                onPress={() => this._toggleAcquis(skill)}>
                {this._displayImage(skill)}
            </TouchableOpacity>
          </View>
        </View>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1, flexDirection: 'column',
  },
  child_container: {
    flex: 1, 
    flexDirection: 'row', 
    backgroundColor: 'white', 
    marginLeft: 10, 
    marginRight: 10, 
    borderRadius: 5
  },
  col_left: {
    flex: 3, 
  },
  col_center: {
    flex: 2, justifyContent: 'center',
  },
  col_right: {
    flex: 2, padding: 2, justifyContent: 'center', alignItems: 'center', 
    
  },
  controlBar: {
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
})

const mapStateToProps = (state) => {
  return {
    acquisSkill: state.acquisSkill
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillItem)
