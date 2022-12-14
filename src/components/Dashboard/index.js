import React from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';
import { Box, Grid, Typography, Paper } from '@material-ui/core';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './Column';

function getListStyle(isDraggingOver) {
  return {
    backgroundColor: isDraggingOver ? 'lightblue' : 'lightgray',
    padding: 8,
    minHeight: 500,
  }
};

const Dashboard = () => {
  const { boards } = useStore();
  return (
    <Box p={2}>
      <DragDropContext onDragEnd={() => {}}>
      <Grid container>
        {boards.active?.sections?.map(section => {
          return (
            <Grid item key={section.id}>
              <Paper>
                <Box p={1} display='flex' alignItems='center' justifyContent='center'>
                  <Typography variant='h5'>{section?.title}</Typography>
                </Box>
                <Droppable droppableId={section.id}>
                  {(provided, snapshot) => {
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      <Column section={section}/>
                      {provided.placeholder}
                    </div>;

                  }}
                </Droppable>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
      </DragDropContext>
    </Box>
  );
};

export default observer(Dashboard);