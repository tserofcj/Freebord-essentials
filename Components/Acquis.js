import React from 'react'
import { StyleSheet, View, FlatList, Text  } from 'react-native'
import SkillItem from './SkillItem'
import skills from '../Helpers/skillsData'
import { connect } from 'react-redux'

class Acquis extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          data={this.props.acquisSkill}
          extraData={this.props.acquisSkill}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => 
          	<SkillItem 
          		skill={item}
          	/>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  text_separatreur: {
    backgroundColor: '#dce9f0',
    padding: 15,
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#9f939e'
  }
})


const mapStateToProps = state => {
  return {
    acquisSkill: state.acquisSkill
  }
}

export default connect(mapStateToProps)(Acquis)

