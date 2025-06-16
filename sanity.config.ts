import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';

// import types
import { exercise } from './schemas/exercise';
import { exerciseCategory } from './schemas/exerciseCategory';
import {exerciseCollection} from './schemas/exerciseCollection';

export default defineConfig({
  name: 'measure-by-measure',
  title: 'Measure by Measure',
  projectId: 'n13ym9gs',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [
      exerciseCategory,
      exerciseCollection,
      exercise
    ],
  },
})